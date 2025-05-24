"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { supabase } from "@/lib/supabase"
import { BookmarkIcon, ExternalLinkIcon } from "lucide-react"

interface JobBoardProps {
  userId: string
}

interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary: string
  description: string
  requirements: string[]
  url: string
  posted_date: string
  bookmarked: boolean
}

export function JobBoard({ userId }: JobBoardProps) {
  const [jobs, setJobs] = useState<Job[]>([])
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [jobType, setJobType] = useState("all")

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Fetch all jobs
        const { data, error } = await supabase.from("jobs").select("*").order("posted_date", { ascending: false })

        if (error) throw error

        // Fetch user bookmarks
        const { data: bookmarks, error: bookmarkError } = await supabase
          .from("job_bookmarks")
          .select("job_id")
          .eq("user_id", userId)

        if (bookmarkError) throw bookmarkError

        const bookmarkedJobIds = new Set(bookmarks?.map((b) => b.job_id) || [])

        // Add bookmarked status to jobs
        const jobsWithBookmarks =
          data?.map((job) => ({
            ...job,
            requirements: job.requirements || [],
            bookmarked: bookmarkedJobIds.has(job.id),
          })) || []

        setJobs(jobsWithBookmarks)
        setFilteredJobs(jobsWithBookmarks)
      } catch (error) {
        console.error("Error fetching jobs:", error)
      }
    }

    if (userId) {
      fetchJobs()
    } else {
      // Demo jobs if user not loaded yet
      const demoJobs = getDemoJobs()
      setJobs(demoJobs)
      setFilteredJobs(demoJobs)
    }
  }, [userId])

  useEffect(() => {
    // Filter jobs based on search term and job type
    let filtered = jobs

    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (jobType !== "all") {
      filtered = filtered.filter((job) => job.type === jobType)
    }

    setFilteredJobs(filtered)
  }, [searchTerm, jobType, jobs])

  const toggleBookmark = async (jobId: string) => {
    try {
      const job = jobs.find((j) => j.id === jobId)
      if (!job) return

      const newBookmarkedValue = !job.bookmarked

      // Update local state
      setJobs(jobs.map((j) => (j.id === jobId ? { ...j, bookmarked: newBookmarkedValue } : j)))

      setFilteredJobs(filteredJobs.map((j) => (j.id === jobId ? { ...j, bookmarked: newBookmarkedValue } : j)))

      if (newBookmarkedValue) {
        // Add bookmark
        await supabase.from("job_bookmarks").insert({
          user_id: userId,
          job_id: jobId,
          created_at: new Date().toISOString(),
        })
      } else {
        // Remove bookmark
        await supabase.from("job_bookmarks").delete().eq("user_id", userId).eq("job_id", jobId)
      }
    } catch (error) {
      console.error("Error toggling bookmark:", error)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search jobs by title, company or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-48">
          <Select value={jobType} onValueChange={setJobType}>
            <SelectTrigger>
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
              <SelectItem value="Internship">Internship</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Card key={job.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <CardDescription>
                      {job.company} • {job.location}
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleBookmark(job.id)}
                    className={job.bookmarked ? "text-yellow-500" : ""}
                  >
                    <BookmarkIcon className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex gap-2 mb-2">
                  <span className="text-xs px-2 py-1 bg-slate-100 rounded-full">{job.type}</span>
                  {job.salary && <span className="text-xs px-2 py-1 bg-slate-100 rounded-full">{job.salary}</span>}
                </div>
                <p className="text-sm line-clamp-2 mb-2">{job.description}</p>
                {job.requirements && job.requirements.length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs font-medium mb-1">Key Requirements:</p>
                    <ul className="text-xs space-y-1 pl-4 list-disc">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between pt-0">
                <span className="text-xs text-gray-500">Posted {formatDate(job.posted_date)}</span>
                <Button size="sm" asChild>
                  <a href={job.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    Apply <ExternalLinkIcon className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-2 py-8 text-center">
            <p className="text-muted-foreground">No jobs found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

function getDemoJobs(): Job[] {
  return [
    {
      id: "1",
      title: "Junior Frontend Developer",
      company: "TechStart Inc.",
      location: "Remote",
      type: "Full-time",
      salary: "$70,000 - $90,000",
      description:
        "We're looking for a Junior Frontend Developer to join our growing team. You'll work on our web applications, collaborate with designers, and implement UI features.",
      requirements: [
        "HTML, CSS, and JavaScript experience",
        "Experience with React.js",
        "Understanding of responsive design",
        "BS/BA in Computer Science or equivalent experience",
      ],
      url: "https://example.com/jobs/1",
      posted_date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      bookmarked: false,
    },
    {
      id: "2",
      title: "Backend Developer Intern",
      company: "Growth Systems",
      location: "San Francisco, CA",
      type: "Internship",
      salary: "$25/hour",
      description:
        "Join our engineering team for a 3-month internship program. Gain hands-on experience building and optimizing backend services.",
      requirements: [
        "Currently pursuing a degree in Computer Science",
        "Knowledge of at least one backend language (Node.js, Python, Java)",
        "Basic understanding of databases",
        "Strong problem-solving skills",
      ],
      url: "https://example.com/jobs/2",
      posted_date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      bookmarked: false,
    },
    {
      id: "3",
      title: "Full Stack Developer",
      company: "innovate.io",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      description:
        "We're seeking a talented Full Stack Developer to help build our next generation of web applications. You'll work across the entire stack from frontend to backend.",
      requirements: [
        "3+ years of web development experience",
        "Proficiency in React, Node.js, and SQL/NoSQL databases",
        "Experience with cloud platforms like AWS or Azure",
        "Good understanding of security and performance best practices",
      ],
      url: "https://example.com/jobs/3",
      posted_date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      bookmarked: false,
    },
    {
      id: "4",
      title: "QA Engineer",
      company: "SecureTech Solutions",
      location: "Chicago, IL",
      type: "Contract",
      salary: "$40-50/hour",
      description:
        "6-month contract role for a QA Engineer to help ensure the quality of our enterprise security software through manual and automated testing.",
      requirements: [
        "Experience with test planning and execution",
        "Knowledge of testing tools and frameworks",
        "Basic scripting skills for test automation",
        "Strong attention to detail",
      ],
      url: "https://example.com/jobs/4",
      posted_date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      bookmarked: false,
    },
  ]
}
