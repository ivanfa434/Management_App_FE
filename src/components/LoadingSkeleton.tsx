import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const ProjectCardSkeleton = () => (
  <Card>
    <CardHeader>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-4 w-8" />
          <Skeleton className="h-4 w-8" />
        </div>
        <Skeleton className="h-4 w-16" />
      </div>
    </CardContent>
  </Card>
);

export const TaskCardSkeleton = () => (
  <Card>
    <CardHeader className="pb-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-full" />
    </CardHeader>
    <CardContent className="pt-0">
      <div className="flex items-center justify-between">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-6 w-20" />
      </div>
    </CardContent>
  </Card>
);

export const DashboardSkeleton = () => (
  <div className="container py-8">
    <div className="flex items-center justify-between mb-8">
      <div>
        <Skeleton className="h-8 w-48 mb-2" />
        <Skeleton className="h-4 w-96" />
      </div>
      <Skeleton className="h-10 w-32" />
    </div>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  </div>
);

export const ProjectSkeleton = () => (
  <div className="container py-8">
    <div className="flex items-center justify-between mb-8">
      <div>
        <Skeleton className="h-8 w-64 mb-2" />
        <Skeleton className="h-4 w-96" />
      </div>
      <div className="flex items-center space-x-2">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
    <div className="grid grid-cols-4 gap-4 mb-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-8 w-8" />
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="flex gap-6 min-h-[600px]">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex-1">
          <div className="bg-muted/50 rounded-lg p-4">
            <Skeleton className="h-6 w-24 mb-4" />
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, j) => (
                <TaskCardSkeleton key={j} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
