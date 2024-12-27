'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Bell, Settings2, Plus } from 'lucide-react';
import { AppSidebar } from '@/components/core/layout/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export function ApplicationExample() {
  const [amounts, setAmounts] = React.useState<string[]>([]);

  React.useEffect(() => {
    setAmounts(Array.from({ length: 5 }).map(() => (Math.random() * 1000).toFixed(2)));
  }, []);

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
                  <Plus className='h-4 w-4' />
                  Create
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>Create New</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Plus className='h-4 w-4' /> New Project
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings2 className='h-4 w-4' /> New Team
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell className='h-4 w-4' /> New Alert
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
              <DropdownMenuContent align='end' className='scrollbar w-[300px]'>
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
                      <span className='text-sm text-muted-foreground'>
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
                  className='h-4 w-4 text-muted-foreground'>
                  <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                </svg>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>$45,231.89</div>
                <p className='text-xs text-muted-foreground'>+20.1% from last month</p>
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
                  className='h-4 w-4 text-muted-foreground'>
                  <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                  <circle cx='9' cy='7' r='4' />
                  <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
                </svg>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>+2350</div>
                <p className='text-xs text-muted-foreground'>+180.1% from last month</p>
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
                  className='h-4 w-4 text-muted-foreground'>
                  <rect width='20' height='14' x='2' y='5' rx='2' />
                  <path d='M2 10h20' />
                </svg>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>+12,234</div>
                <p className='text-xs text-muted-foreground'>+19% from last month</p>
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
                          <Badge
                            variant={
                              i % 3 === 0 ? 'destructive' : i % 3 === 1 ? 'secondary' : 'default'
                            }>
                            {i % 3 === 0 ? 'Cancelled' : i % 3 === 1 ? 'Pending' : 'Completed'}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date().toLocaleDateString('en-US')}</TableCell>
                        <TableCell className='text-right'>${amounts[i]}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className='md:col-span-2 lg:col-span-4'>
              <CardHeader>
                <CardTitle>Quick Insights</CardTitle>
              </CardHeader>
              <CardContent className='text-[0.96rem] leading-relaxed'>
                Dive into your recent activity! This dashboard provides a quick overview of key
                metrics and updates. Explore the latest sales figures, track your progress, and stay
                ahead of the curve. Remember, every step forward counts! This is a longer text to
                demonstrate the text wrapping and how it adapts to different screen sizes.
              </CardContent>
            </Card>
            <Card className='md:col-span-2 lg:col-span-4'>
              <CardHeader>
                <CardTitle>Invite New User</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-1 gap-4'>
                  <div className='grid gap-3'>
                    <Label htmlFor='name'>Name</Label>
                    <Input id='name' placeholder='User name' />
                  </div>
                  <div className='grid gap-3'>
                    <Label htmlFor='email'>Email</Label>
                    <Input id='email' placeholder='user@example.com' type='email' />
                  </div>
                  <div className='flex items-center justify-between py-2'>
                    <Label htmlFor='team'>Add to team</Label>
                    <Switch id='team' />
                  </div>
                </div>
                <DialogFooter className='mt-4 border-t pt-4'>
                  <Button type='submit'>Send</Button>
                </DialogFooter>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
