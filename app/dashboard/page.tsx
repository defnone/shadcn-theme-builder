import { AppSidebar } from "@/components/core/layout/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Plus, Settings2, Bell } from "lucide-react"
import { Badge } from "@/components/ui/badge"
export default function Page() {
  return (
    <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className='flex h-16 shrink-0 items-center justify-between border-b px-4'>
                <div className='flex items-center gap-2'>
                  <SidebarTrigger className='-ml-1' />
                  <Separator orientation='vertical' className='h-4' />
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Analytics</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
                <div className='flex items-center gap-4'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='outline' size='sm'>
                        <Plus className='mr-2 h-4 w-4' />
                        Create
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuLabel>Create New</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Plus className='mr-2 h-4 w-4' /> New Project
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings2 className='mr-2 h-4 w-4' /> New Team
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Bell className='mr-2 h-4 w-4' /> New Alert
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Separator orientation='vertical' className='h-4' />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='ghost' size='icon'>
                        <Bell className='h-4 w-4' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end' className='w-[300px] scrollbar'>
                      <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <div className='max-h-[300px] overflow-auto'>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <DropdownMenuItem key={i} className='flex flex-col items-start gap-1 p-4'>
                            <div className='flex w-full items-center gap-2'>
                              <span className='font-semibold'>System Update</span>
                              <Badge variant='secondary' className='ml-auto'>
                                {i + 1}m ago
                              </Badge>
                            </div>
                            <span className='text-muted-foreground text-sm'>
                              A new system update is available. Please review and install.
                            </span>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </header>

              <div className='flex flex-1 flex-col gap-4 p-4'>
                <div className='grid gap-4 md:grid-cols-3'>
                  <Card>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='text-muted-foreground h-4 w-4'
                      >
                        <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className='text-2xl font-bold'>$45,231.89</div>
                      <p className='text-muted-foreground text-xs'>+20.1% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>Active Users</CardTitle>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='text-muted-foreground h-4 w-4'
                      >
                        <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                        <circle cx='9' cy='7' r='4' />
                        <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className='text-2xl font-bold'>+2350</div>
                      <p className='text-muted-foreground text-xs'>+180.1% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>Sales</CardTitle>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='text-muted-foreground h-4 w-4'
                      >
                        <rect width='20' height='14' x='2' y='5' rx='2' />
                        <path d='M2 10h20' />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className='text-2xl font-bold'>+12,234</div>
                      <p className='text-muted-foreground text-xs'>+19% from last month</p>
                    </CardContent>
                  </Card>
                </div>

                <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-8'>
                  <Card className='md:col-span-8'>
                    <CardHeader>
                      <CardTitle>Recent Sales</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className='text-right'>Amount</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <TableRow key={i}>
                              <TableCell className='font-medium'>
                                {
                                  [
                                    'Alice Smith',
                                    'Bob Johnson',
                                    'Charlie Brown',
                                    'Diana Miller',
                                    'Eva Davis',
                                  ][i]
                                }
                              </TableCell>
                              <TableCell>
                                <Badge variant={i % 2 ? 'secondary' : 'default'}>
                                  {i % 2 ? 'Pending' : 'Completed'}
                                </Badge>
                              </TableCell>
                              <TableCell>{new Date().toLocaleDateString()}</TableCell>
                              <TableCell className='text-right'>
                                ${(Math.random() * 1000).toFixed(2)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>

                </div>
              </div>
            </SidebarInset>
          </SidebarProvider>
  )
}
