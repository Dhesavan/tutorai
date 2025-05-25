import { DomainTest } from "@/components/domain-test"

export default function TestPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">IT Domain Knowledge Assessment</h1>
        <p className="text-muted-foreground mb-8">
          This test contains one question from each major IT domain. Answer all questions to assess your knowledge across different areas of technology.
        </p>
        <DomainTest />
      </div>
    </div>
  )
} 