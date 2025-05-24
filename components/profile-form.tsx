"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { toast } from "@/components/ui/use-toast"

const profileSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  bio: z.string().optional(),
  career_interests: z.string().optional(),
  skills: z.array(z.string()).optional(),
})

interface ProfileFormProps {
  user: any
}

const commonSkills = [
  "JavaScript",
  "Python",
  "Java",
  "React",
  "Node.js",
  "HTML/CSS",
  "SQL",
  "Git",
  "AWS",
  "Docker",
  "MongoDB",
  "PostgreSQL",
  "TypeScript",
  "Vue.js",
  "Angular",
  "Express.js",
  "REST APIs",
  "GraphQL",
  "Linux",
  "Agile/Scrum",
]

const careerPaths = [
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "Mobile Development",
  "DevOps Engineering",
  "Data Science",
  "Machine Learning",
  "Cybersecurity",
  "Cloud Computing",
  "UI/UX Design",
  "Quality Assurance",
  "Product Management",
  "Technical Writing",
  "Database Administration",
  "System Administration",
]

export function ProfileForm({ user }: ProfileFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedSkills, setSelectedSkills] = useState<string[]>(user?.skills || [])
  const [newSkill, setNewSkill] = useState("")

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || "",
      bio: user?.bio || "",
      career_interests: user?.career_interests || "",
      skills: user?.skills || [],
    },
  })

  const addSkill = (skill: string) => {
    if (skill && !selectedSkills.includes(skill)) {
      const updatedSkills = [...selectedSkills, skill]
      setSelectedSkills(updatedSkills)
      form.setValue("skills", updatedSkills)
      setNewSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    const updatedSkills = selectedSkills.filter((skill) => skill !== skillToRemove)
    setSelectedSkills(updatedSkills)
    form.setValue("skills", updatedSkills)
  }

  async function onSubmit(values: z.infer<typeof profileSchema>) {
    setIsLoading(true)

    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          name: values.name,
          bio: values.bio,
          career_interests: values.career_interests,
          skills: selectedSkills,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id)

      if (error) throw error

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })

      router.push("/dashboard")
      router.refresh()
    } catch (error: any) {
      toast({
        title: "Update failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>
          This information helps our AI mentor provide more personalized advice for your career journey.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a bit about yourself, your background, and your goals..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Share your background, current situation, and what you're hoping to achieve in your IT career.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="career_interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Career Interest</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your primary career interest" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {careerPaths.map((path) => (
                        <SelectItem key={path} value={path}>
                          {path}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Choose the career path you're most interested in pursuing.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <FormLabel>Skills</FormLabel>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedSkills.map((skill) => (
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

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Common skills:</p>
                <div className="flex flex-wrap gap-2">
                  {commonSkills
                    .filter((skill) => !selectedSkills.includes(skill))
                    .map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="cursor-pointer hover:bg-secondary"
                        onClick={() => addSkill(skill)}
                      >
                        + {skill}
                      </Badge>
                    ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Updating..." : "Update Profile"}
              </Button>
              <Button type="button" variant="outline" onClick={() => router.push("/dashboard")}>
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
