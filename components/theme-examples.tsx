"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Bell,
  Check,
  Info,
  AlertTriangle,
  X,
  Trash2,
  Settings2,
  Plus,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function ThemeExamples() {
  return (
    <div className="space-y-16 pl-0 p-10">
      {/* Alerts */}
      <div className="flex flex-row gap-4">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            This is an information alert using default colors.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            This is a destructive alert showing destructive colors.
          </AlertDescription>
        </Alert>
      </div>

      {/* Text on Background Example */}
      <div className="">
        <h1 className="text-4xl font-bold mb-4">Sample Text on Background</h1>
        <h2 className="text-2xl font-semibold mb-2">This is a subtitle</h2>
        <p className="mb-4">
          This is an example of regular text on the main background. It uses the
          default foreground color for text and the background color for the
          container. This helps visualize how changing these colors affects the
          overall look of your content.
        </p>
        <p className="mb-4">
          Here&apos;s an example of a{" "}
          <a href="#" className="text-primary hover:underline">
            primary colored link
          </a>
          .
        </p>
        <p className="text-muted-foreground">
          This text uses the muted-foreground color, which is often used for
          less important or supplementary information.
        </p>
      </div>
      {/* Basic Card Example */}
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                This is a basic card example showing card and card-foreground
                colors.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content demonstrating the default text color.</p>
            </CardContent>
            <CardFooter className="flex gap-4 flex-wrap">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <div className="space-y-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open Menu</Button>
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

          {/* Badges */}
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>
                Different badge variants showing various color combinations.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Badge>Default Badge</Badge>
                <Badge variant="secondary">Secondary Badge</Badge>
                <Badge variant="destructive">Destructive Badge</Badge>
                <Badge variant="outline">Outline Badge</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Status Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="h-4 w-4" /> Success
              </CardTitle>
            </CardHeader>
            <CardContent>Using primary colors for success state</CardContent>
          </Card>

          <Card className="bg-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-4 w-4" /> Notification
              </CardTitle>
            </CardHeader>
            <CardContent>
              Using secondary colors for notification state
            </CardContent>
          </Card>

          <Card className="bg-muted text-muted-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <X className="h-4 w-4" /> Disabled
              </CardTitle>
            </CardHeader>
            <CardContent>Using muted colors for disabled state</CardContent>
          </Card>
        </div>

        {/* Accent Card */}
        <div className="flex flex-row w-full border border-border rounded-lg p-0.5">
          <div className="w-1/3 bg-background px-8 py-8">
            <div className="bg-accent rounded-md p-4 text-accent-foreground font-bold">
              Accent on background
            </div>
          </div>
          <div className="w-1/3 bg-card px-8 py-8">
            <div className="bg-accent rounded-md p-4 text-accent-foreground font-bold">
              Accent on card
            </div>
          </div>
          <div className="w-1/3 bg-popover px-8 py-8">
            <div className="bg-accent rounded-md p-4 text-accent-foreground font-bold">
              Accent on popover
            </div>
          </div>
        </div>

        {/* Form Example and Table Example */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Extended Form</CardTitle>
              <CardDescription>
                Example of a form with various input elements and validation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  value="PedroDuarte"
                  className="ring-2 ring-ring ring-offset-2 ring-offset-background"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  className="border-destructive"
                />
                <p className="text-sm text-destructive">
                  Please enter a valid email
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">About me</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell me about yourself..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" checked />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the terms of use
                </Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit</Button>
            </CardFooter>
          </Card>

          <Tabs defaultValue="account" className="w-full mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when
                    you&apos;re done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" disabled />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button disabled>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you&apos;ll be
                    logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Table Example */}
        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle>Users Table</CardTitle>
            <CardDescription>
              Example of a table with various states and styles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>List of active users</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">001</TableCell>
                  <TableCell>Luke Skywalker</TableCell>
                  <TableCell>
                    <Badge>Active</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">002</TableCell>
                  <TableCell>Leia Organa</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Pending</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">003</TableCell>
                  <TableCell>Han Solo</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Blocked</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Dialogs Examples */}
        <Card className="bg-card text-card-foreground ">
          <CardHeader>
            <CardTitle>Dialogs Examples</CardTitle>
            <CardDescription>
              Examples of different dialog component usages
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-8 flex flex-row">
            {/* Basic Confirmation Dialog */}
            <div className="space-y-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete account
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. Your account will be
                      permanently deleted from our system.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="gap-2 sm:gap-0">
                    <DialogTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogTrigger>
                    <Button variant="destructive">Yes, delete account</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* Form Dialog */}
            <div className="space-y-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New project
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Create a new project</DialogTitle>
                    <DialogDescription>
                      Fill in the information about your new project
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="project-name">Project name</Label>
                      <Input id="project-name" placeholder="My new project" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project-description">
                        Project description
                      </Label>
                      <Textarea
                        id="project-description"
                        placeholder="Describe your project..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Visibility</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select access type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                          <SelectItem value="team">Team</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Create project</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* Custom Content Dialog */}
            <div className="space-y-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <Settings2 className="mr-2 h-4 w-4" />
                    Theme settings
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Theme settings</DialogTitle>
                    <DialogDescription>
                      Customize the appearance of your application
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="dark-mode">Dark mode</Label>
                      <Checkbox id="dark-mode" />
                    </div>
                    <div className="space-y-2">
                      <Label>Color scheme</Label>
                      <div className="flex gap-2">
                        <Button variant="outline" className="w-full">
                          <span className="h-4 w-4 rounded-full bg-primary mr-2" />
                          Blue
                        </Button>
                        <Button variant="outline" className="w-full">
                          <span className="h-4 w-4 rounded-full bg-destructive mr-2" />
                          Red
                        </Button>
                        <Button variant="outline" className="w-full">
                          <span className="h-4 w-4 rounded-full bg-green-500 mr-2" />
                          Green
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Font size</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sm">Small</SelectItem>
                          <SelectItem value="md">Medium</SelectItem>
                          <SelectItem value="lg">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save settings</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-full border border-border rounded-lg p-0.5">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">
                        Building Your Application
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
              </div>
              <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
            </div>
          </SidebarInset>
        </SidebarProvider>
        <div className="p-4">
          <Link
            href="/dashboard"
            className="text-sm text-muted-foreground underline"
          >
            Full screen example
          </Link>
        </div>
      </div>
    </div>
  );
}
