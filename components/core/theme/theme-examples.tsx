'use client';

import * as React from 'react';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
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
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Bell, Check, Info, AlertTriangle, X, Trash2, Settings2, Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ApplicationExample } from './application-example';
import Link from 'next/link';

export function ThemeExamples() {
  return (
    <div className='flex flex-col space-y-16 py-10 pl-[500px] pr-10'>
      {/* Application Example */}
      <section>
        <div className='w-full rounded-lg border border-border p-0.5'>
          <ApplicationExample />
          <div className='p-4'>
            <Link href='/dashboard' className='text-sm text-muted-foreground underline'>
              Full screen example
            </Link>
          </div>
        </div>
      </section>

      {/* Alerts */}
      <section>
        <h2 className='mb-4 text-2xl font-semibold'>Alerts</h2>
        <div className='flex flex-row gap-4'>
          <Alert>
            <Info className='h-4 w-4' />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>This is an information alert using default colors.</AlertDescription>
          </Alert>
          <Alert variant='destructive'>
            <AlertTriangle className='h-4 w-4' />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              This is a destructive alert showing destructive colors.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Text on Background Example */}
      <section>
        <h1 className='mb-4 text-4xl font-bold'>
          The Rise of Artificial Intelligence in Healthcare
        </h1>
        <h3 className='mb-2 text-2xl font-semibold'>
          Transforming Patient Care Through Innovation
        </h3>
        <p className='mb-4 leading-relaxed'>
          Artificial Intelligence (AI) is revolutionizing the healthcare industry, offering
          unprecedented opportunities to improve patient care, streamline medical processes, and
          enhance diagnostic accuracy. From early disease detection to personalized treatment plans,
          AI-powered solutions are becoming increasingly integral to modern healthcare delivery.
        </p>
        <p className='mb-4 leading-relaxed'>
          One of the most promising applications is in medical imaging, where{' '}
          <a href='#' className='text-primary hover:underline'>
            deep learning algorithms
          </a>{' '}
          can detect subtle patterns that might escape the human eye. These systems have shown
          remarkable accuracy in identifying potential malignancies and other abnormalities in
          X-rays, MRIs, and CT scans.
        </p>
        <p className='text-muted-foreground'>
          Published on October 15, 2023 | Written by Dr. Sarah Johnson | 5 min read
        </p>
      </section>

      {/* Badges */}
      <section>
        <h2 className='mb-4 text-2xl font-extrabold'>Badges</h2>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-wrap gap-2'>
            <Badge>Default Badge</Badge>
            <Badge variant='secondary'>Secondary Badge</Badge>
            <Badge variant='destructive'>Destructive Badge</Badge>
            <Badge variant='outline'>Outline Badge</Badge>
          </div>
        </div>
      </section>

      {/* Basic Card Example */}
      <section>
        <h2 className='mb-4 text-2xl font-extrabold'>Basic Card</h2>
        <div className='grid gap-4'>
          <div className='grid grid-cols-1 gap-4'>
            <Card className='bg-card text-card-foreground'>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  This is a basic card example showing card and card-foreground colors.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content demonstrating the default text color.</p>
              </CardContent>
              <CardFooter className='flex flex-wrap gap-8'>
                <div className='flex gap-2'>
                  <Button>Primary Button</Button>
                  <Button disabled>Primary Button</Button>
                </div>
                <div className='flex gap-2'>
                  <Button variant='secondary'>Secondary Button</Button>
                  <Button variant='secondary' disabled>
                    Secondary Button
                  </Button>
                </div>
                <div className='flex gap-2'>
                  <Button variant='outline'>Outline Button</Button>
                  <Button variant='outline' disabled>
                    Outline Button
                  </Button>
                </div>
                <div className='flex gap-2'>
                  <Button variant='ghost'>Ghost Button</Button>
                  <Button variant='ghost' disabled>
                    Ghost Button
                  </Button>
                </div>
                <div className='space-y-2'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='outline'>Open Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Status Cards */}
      <section>
        <h2 className='mb-4 text-2xl font-extrabold'>Main Colors as Cards</h2>
        <div className='grid gap-4 md:grid-cols-3'>
          <Card className='bg-primary text-primary-foreground'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Check className='h-4 w-4' /> Primary
              </CardTitle>
            </CardHeader>
            <CardContent>Example of primary background color and primary text color</CardContent>
          </Card>

          <Card className='bg-secondary text-secondary-foreground'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Bell className='h-4 w-4' /> Secondary
              </CardTitle>
            </CardHeader>
            <CardContent>
              Example of secondary background color and secondary text color
            </CardContent>
          </Card>

          <Card className='bg-muted text-muted-foreground'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <X className='h-4 w-4' /> Muted
              </CardTitle>
            </CardHeader>
            <CardContent>Example of muted background color and muted text color</CardContent>
          </Card>
        </div>
      </section>

      {/* Accent Card */}
      <section>
        <h2 className='mb-4 text-2xl font-extrabold'>Accent Card</h2>
        <div className='flex w-full flex-row rounded-lg border border-border p-0.5 text-[0.97rem]'>
          <div className='w-1/3 bg-background px-8 py-8'>
            <div className='rounded-md bg-accent p-4 text-center text-accent-foreground'>
              Accent on background
            </div>
          </div>
          <div className='w-1/3 bg-card px-8 py-8'>
            <div className='rounded-md bg-accent p-4 text-center text-accent-foreground'>
              Accent on card
            </div>
          </div>
          <div className='w-1/3 bg-popover px-8 py-8'>
            <div className='rounded-md bg-accent p-4 text-center text-accent-foreground'>
              Accent on popover
            </div>
          </div>
        </div>
      </section>

      {/* Form Example and Table Example */}
      <section>
        <h2 className='mb-4 text-2xl font-extrabold'>Forms</h2>
        <div className='grid grid-cols-2 gap-4'>
          <Card className='bg-card text-card-foreground'>
            <CardHeader>
              <CardTitle>Extended Form</CardTitle>
              <CardDescription>
                Example of a form with various input elements and validation
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='username'>Username</Label>
                <Input
                  id='username'
                  placeholder='Enter your username'
                  value='PedroDuarte'
                  className='ring-2 ring-ring ring-offset-2 ring-offset-background'
                  onChange={e => console.log(e.target.value)}
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='example@example.com'
                  className='border-destructive'
                />
                <p className='text-sm text-destructive'>Please enter a valid email</p>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='role'>Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='Select a role' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='admin'>Admin</SelectItem>
                    <SelectItem value='user'>User</SelectItem>
                    <SelectItem value='editor'>Editor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='bio'>About me</Label>
                <Textarea
                  id='bio'
                  placeholder='Tell me about yourself...'
                  className='min-h-[100px]'
                />
              </div>

              <div className='flex items-center space-x-2'>
                <Checkbox id='terms' checked />
                <Label htmlFor='terms' className='text-sm'>
                  I agree to the terms of use
                </Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button className='w-full'>Submit</Button>
            </CardFooter>
          </Card>

          <Tabs defaultValue='account' className='mx-auto w-full'>
            <TabsList className='grid w-full grid-cols-2'>
              <TabsTrigger value='account'>Account</TabsTrigger>
              <TabsTrigger value='password'>Password</TabsTrigger>
            </TabsList>
            <TabsContent value='account'>
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when you&apos;re done.
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-2'>
                  <div className='space-y-1'>
                    <Label htmlFor='name'>Name</Label>
                    <Input id='name' defaultValue='Pedro Duarte' />
                  </div>
                  <div className='space-y-1'>
                    <Label htmlFor='username'>Username</Label>
                    <Input id='username' defaultValue='@peduarte' disabled />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button disabled>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value='password'>
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you&apos;ll be logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-2'>
                  <div className='space-y-1'>
                    <Label htmlFor='current'>Current password</Label>
                    <Input id='current' type='password' />
                  </div>
                  <div className='space-y-1'>
                    <Label htmlFor='new'>New password</Label>
                    <Input id='new' type='password' />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Table Example */}
      <section>
        <h2 className='mb-4 text-2xl font-extrabold'>Table</h2>
        <Card className='bg-card text-card-foreground'>
          <CardHeader>
            <CardTitle>Users Table</CardTitle>
            <CardDescription>Example of a table with various states and styles</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>List of active users</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[100px]'>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className='text-right'>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium'>001</TableCell>
                  <TableCell>Luke Skywalker</TableCell>
                  <TableCell>
                    <Badge>Active</Badge>
                  </TableCell>
                  <TableCell className='text-right'>
                    <Button variant='ghost' size='sm'>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>002</TableCell>
                  <TableCell>Leia Organa</TableCell>
                  <TableCell>
                    <Badge variant='secondary'>Pending</Badge>
                  </TableCell>
                  <TableCell className='text-right'>
                    <Button variant='ghost' size='sm'>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>003</TableCell>
                  <TableCell>Han Solo</TableCell>
                  <TableCell>
                    <Badge variant='destructive'>Blocked</Badge>
                  </TableCell>
                  <TableCell className='text-right'>
                    <Button variant='ghost' size='sm'>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* Dialogs Examples */}
      <section>
        <h2 className='mb-4 text-2xl font-extrabold'>Dialogs</h2>
        <Card className='bg-card text-card-foreground'>
          <CardHeader>
            <CardTitle>Dialogs Examples</CardTitle>
            <CardDescription>Examples of different dialog component usages</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-row gap-3'>
            {/* Basic Confirmation Dialog */}
            <div className='space-y-2'>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant='destructive'>
                    <Trash2 className='mr-2 h-4 w-4' />
                    Delete account
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. Your account will be permanently deleted from
                      our system.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className='gap-2 sm:gap-0'>
                    <DialogTrigger asChild>
                      <Button variant='outline'>Cancel</Button>
                    </DialogTrigger>
                    <Button variant='destructive'>Yes, delete account</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* Form Dialog */}
            <div className='space-y-2'>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className='mr-2 h-4 w-4' />
                    New project
                  </Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                  <DialogHeader>
                    <DialogTitle>Create a new project</DialogTitle>
                    <DialogDescription>
                      Fill in the information about your new project
                    </DialogDescription>
                  </DialogHeader>
                  <div className='grid gap-4 py-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='project-name'>Project name</Label>
                      <Input id='project-name' placeholder='My new project' />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='project-description'>Project description</Label>
                      <Textarea id='project-description' placeholder='Describe your project...' />
                    </div>
                    <div className='space-y-2'>
                      <Label>Visibility</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder='Select access type' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='public'>Public</SelectItem>
                          <SelectItem value='private'>Private</SelectItem>
                          <SelectItem value='team'>Team</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type='submit'>Create project</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* Custom Content Dialog */}
            <div className='space-y-2'>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant='outline'>
                    <Settings2 className='mr-2 h-4 w-4' />
                    Theme settings
                  </Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                  <DialogHeader>
                    <DialogTitle>Theme settings</DialogTitle>
                    <DialogDescription>
                      Customize the appearance of your application
                    </DialogDescription>
                  </DialogHeader>
                  <div className='grid gap-4 py-4'>
                    <div className='flex items-center justify-between'>
                      <Label htmlFor='dark-mode'>Dark mode</Label>
                      <Checkbox id='dark-mode' />
                    </div>
                    <div className='space-y-2'>
                      <Label>Color scheme</Label>
                      <div className='flex gap-2'>
                        <Button variant='outline' className='w-full'>
                          <span className='mr-2 h-4 w-4 rounded-full bg-primary' />
                          Blue
                        </Button>
                        <Button variant='outline' className='w-full'>
                          <span className='mr-2 h-4 w-4 rounded-full bg-destructive' />
                          Red
                        </Button>
                        <Button variant='outline' className='w-full'>
                          <span className='mr-2 h-4 w-4 rounded-full bg-green-500' />
                          Green
                        </Button>
                      </div>
                    </div>
                    <div className='space-y-2'>
                      <Label>Font size</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder='Select size' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='sm'>Small</SelectItem>
                          <SelectItem value='md'>Medium</SelectItem>
                          <SelectItem value='lg'>Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type='submit'>Save settings</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
