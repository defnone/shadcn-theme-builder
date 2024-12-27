import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaApple, FaGoogle } from 'react-icons/fa';

export function LoginExample() {
  return (
    <Card className='w-[400px]'>
      <CardHeader className='flex flex-col items-center justify-center'>
        <CardTitle>Welcome to Acme Inc.</CardTitle>
        <CardDescription>
          Don&apos;t have an account?{' '}
          <Link className='underline' href='/sign-up'>
            Sign up
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='grid gap-3'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' placeholder='Enter your email' type='email' />
        </div>
        <Button>Login</Button>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-card px-2 text-muted-foreground'>Or</span>
          </div>
        </div>
        <div className='grid w-full grid-cols-1 gap-3'>
          <Button variant='outline'>
            <FaApple className='mr-1' />
            Continue with Apple
          </Button>
          <Button variant='outline'>
            <FaGoogle className='mr-1' />
            Continue with Google
          </Button>
        </div>
      </CardContent>
      <div className='px-4 pb-4 text-center text-sm text-muted-foreground'>
        By clicking continue, you agree to our <Link href='/terms'>Terms of Service</Link> and{' '}
        <Link className='underline' href='/privacy'>
          Privacy Policy
        </Link>
        .
      </div>
    </Card>
  );
}
