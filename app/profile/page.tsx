"use client"

import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, Mail, Calendar, Briefcase, Code, Edit, ArrowLeft, Copy, Check, Save, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "@/components/ui/use-toast"
import { getProfile, upsertProfile } from "@/lib/supabase"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

interface ProfileData {
  id?: string
  name?: string
  bio?: string
  career_interests?: string
  skills?: string[]
  created_at?: string
  updated_at?: string
  avatar_url?: string
}

const supabase = createClientComponentClient()

export default function Profile() {
  const [userData, setUserData] = useState<any>(null)
  const [profileData, setProfileData] = useState<ProfileData | null>(null)
  const [loading, setLoading] = useState(true)
  const [copiedUserId, setCopiedUserId] = useState(false)
  const [isEditingBio, setIsEditingBio] = useState(false)
  const [isEditingSkills, setIsEditingSkills] = useState(false)
  const [editedBio, setEditedBio] = useState("")
  const [editedSkills, setEditedSkills] = useState<string[]>([])
  const [newSkill, setNewSkill] = useState("")
  const router = useRouter()

  useEffect(() => {
    async function getUserData() {
      try {
        // Get user from auth
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser()

        if (userError) throw userError

        if (user) {
          setUserData(user)

          try {
            // Get profile data from database
            const profile = await getProfile(user.id)
            setProfileData(profile)
          } catch (error) {
            console.log("Profile not found, using auth data only")
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
        toast({
          title: "Error",
          description: "Failed to load user data. Please try again.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    getUserData()
  }, [])

  const getUserName = () => {
    if (profileData?.name) return profileData.name
    if (userData?.user_metadata?.full_name) return userData.user_metadata.full_name
    if (userData?.user_metadata?.name) return userData.user_metadata.name
    if (userData?.email) return userData.email.split("@")[0]
    return "User"
  }

  const getUserInitials = () => {
    const name = getUserName()
    if (name === "User") return "U"

    const nameParts = name.split(" ")
    if (nameParts.length >= 2) {
      return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
  }

  const getUserEmail = () => {
    return userData?.email || "user@example.com"
  }

  const getJoinDate = () => {
    if (userData?.created_at) {
      return new Date(userData.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    }
    return "Recently"
  }

  const copyUserId = async () => {
    if (userData?.id) {
      try {
        await navigator.clipboard.writeText(userData.id)
        setCopiedUserId(true)
        toast({
          title: "User ID copied",
          description: "User ID has been copied to clipboard",
        })
        setTimeout(() => setCopiedUserId(false), 2000)
      } catch (error) {
        toast({
          title: "Copy failed",
          description: "Could not copy User ID to clipboard",
          variant: "destructive",
        })
      }
    }
  }

  const handleSaveBio = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      await upsertProfile(user.id, {
        ...profileData,
        bio: editedBio
      })

      setProfileData((prev: ProfileData | null) => prev ? { ...prev, bio: editedBio } : null)
      setIsEditingBio(false)
      toast({
        title: "Success",
        description: "Bio updated successfully",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update bio",
        variant: "destructive",
      })
    }
  }

  const handleSaveSkills = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      await upsertProfile(user.id, {
        ...profileData,
        skills: editedSkills
      })

      setProfileData((prev: ProfileData | null) => prev ? { ...prev, skills: editedSkills } : null)
      setIsEditingSkills(false)
      toast({
        title: "Success",
        description: "Skills updated successfully",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update skills",
        variant: "destructive",
      })
    }
  }

  const addSkill = (skill: string) => {
    if (skill && !editedSkills.includes(skill)) {
      setEditedSkills([...editedSkills, skill])
      setNewSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setEditedSkills(editedSkills.filter(skill => skill !== skillToRemove))
  }

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading profile...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="sm" onClick={() => router.push("/dashboard")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-muted-foreground">Manage your account information and preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src={
                      userData?.user_metadata?.avatar_url ||
                      profileData?.avatar_url ||
                      "/placeholder.svg?height=96&width=96"
                    }
                    alt={getUserName()}
                  />
                  <AvatarFallback className="bg-blue-500 text-white text-2xl font-bold">
                    {getUserInitials()}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-xl">{getUserName()}</CardTitle>
              <CardDescription className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                {getUserEmail()}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Joined {getJoinDate()}</span>
              </div>

              {profileData?.career_interests && (
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="secondary">{profileData.career_interests}</Badge>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* About Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                About
              </CardTitle>
              {!isEditingBio ? (
                <Button variant="outline" size="sm" onClick={() => {
                  setIsEditingBio(true)
                  setEditedBio(profileData?.bio || "")
                }}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setIsEditingBio(false)}>
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                  <Button size="sm" onClick={handleSaveBio}>
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent>
              {isEditingBio ? (
                <Textarea
                  value={editedBio}
                  onChange={(e) => setEditedBio(e.target.value)}
                  placeholder="Tell us about yourself..."
                  className="min-h-[100px]"
                />
              ) : profileData?.bio ? (
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {profileData.bio}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground italic">
                  No bio added yet. Click "Edit" to add information about yourself.
                </p>
              )}
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Technical Skills
              </CardTitle>
              {!isEditingSkills ? (
                <Button variant="outline" size="sm" onClick={() => {
                  setIsEditingSkills(true)
                  setEditedSkills(profileData?.skills || [])
                }}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setIsEditingSkills(false)}>
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                  <Button size="sm" onClick={handleSaveSkills}>
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent>
              {isEditingSkills ? (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {editedSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                        {skill}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => removeSkill(skill)} />
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add a skill..."
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addSkill(newSkill)
                        }
                      }}
                    />
                    <Button type="button" variant="outline" onClick={() => addSkill(newSkill)}>
                      Add
                    </Button>
                  </div>
                </div>
              ) : profileData?.skills && profileData.skills.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.map((skill: string, index: number) => (
                    <Badge key={index} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground italic">
                  No skills added yet. Click "Edit" to showcase your technical expertise.
                </p>
              )}
            </CardContent>
          </Card>

          {/* Account Information */}
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">User ID</label>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-sm font-mono bg-gray-100 p-2 rounded flex-1 truncate">{userData?.id || "N/A"}</p>
                    <Button variant="outline" size="sm" onClick={copyUserId} className="flex-shrink-0">
                      {copiedUserId ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email Verified</label>
                  <div className="text-sm mt-1">
                    <Badge variant={userData?.email_confirmed_at ? "default" : "secondary"}>
                      {userData?.email_confirmed_at ? "Verified" : "Pending"}
                    </Badge>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Last Sign In</label>
                  <p className="text-sm mt-1">
                    {userData?.last_sign_in_at ? new Date(userData.last_sign_in_at).toLocaleDateString() : "Never"}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Account Provider</label>
                  <div className="text-sm mt-1 capitalize">
                    <Badge variant="outline">{userData?.app_metadata?.provider || "Email"}</Badge>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Profile Created</label>
                  <p className="text-sm mt-1">
                    {profileData?.created_at ? new Date(profileData.created_at).toLocaleDateString() : "Not available"}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Profile Updated</label>
                  <p className="text-sm mt-1">
                    {profileData?.updated_at ? new Date(profileData.updated_at).toLocaleDateString() : "Not available"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
