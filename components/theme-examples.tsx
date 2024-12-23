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

export function ThemeExamples() {
  return (
    <div className="space-y-16">
      {/* Alerts */}
      <div className="flex flex-col gap-4">
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
          . And this is a{" "}
          <a href="#" className="text-secondary hover:underline">
            secondary colored link
          </a>
          .
        </p>
        <p className="text-muted-foreground">
          This text uses the muted-foreground color, which is often used for
          less important or supplementary information.
        </p>
      </div>

      <div className="grid gap-4">
        {/* Basic Card Example */}
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
          <CardFooter className="flex gap-2">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </CardFooter>
        </Card>

        {/* Form Elements */}
        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle>Form Elements</CardTitle>
            <CardDescription>
              Examples of form elements showing input and border colors.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Input Example</Label>
              <Input type="email" placeholder="Enter your email" />
            </div>
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
          </CardContent>
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
        <Card className="bg-accent text-accent-foreground">
          <CardHeader>
            <CardTitle>Accent Example</CardTitle>
            <CardDescription>
              This card uses accent and accent-foreground colors.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content using accent colors for emphasis.</p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary">Action Button</Button>
          </CardFooter>
        </Card>

        {/* Form Example */}
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
              <Input id="username" placeholder="Enter your username" />
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
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm">
                I agree to the terms of use
              </Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Submit</Button>
          </CardFooter>
        </Card>

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
        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle>Dialogs Examples</CardTitle>
            <CardDescription>
              Examples of different dialog component usages
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Basic Confirmation Dialog */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Confirmation Dialog</h3>
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
              <h3 className="text-lg font-medium">Form in a dialog</h3>
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
              <h3 className="text-lg font-medium">Custom content</h3>
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
    </div>
  );
}
