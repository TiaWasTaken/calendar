import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { DialogContent, DialogHeader } from '../../components/ui/dialog.tsx';
import Image from 'next/image'
import Logo from '@/public/logo.png'

export function AuthModal() {
  return(
    <Dialog>
      <DialogTrigger asChild>
        <Button>Try for Free</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px]">
        <DialogHeader className="flex-row justify-center items-center gap-2">
          <Image src={Logo} alt="Logo" className="size-10"/>
          <h4 className="text-3xl font-semibold">Calend<span className="text-primary">Arg</span></h4>
        </DialogHeader>
        <div className="flex flex-col mt-5 gap-3">
          <Button>Sign in with Google</Button>
          <Button>Sign in with Github</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
