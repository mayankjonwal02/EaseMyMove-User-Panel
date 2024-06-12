import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { List } from 'postcss/lib/list'
import { Button } from './ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"

interface helpdeskDetails {
    requestid: string,
    category: string,
    description: string,
    data: any
}

export default function HelpdeskCard({ helpdesk }: { helpdesk: helpdeskDetails }) {
    return (
        <div className='flex flex-row w-full h-fit mb-3 border-t-2 border-gray-200 pt-3 pb-3'>
            <div className='w-1/4 text-center items-center justify-center flex'>{helpdesk.requestid}</div>
            <div className='w-1/4 text-center items-center justify-center flex'>{helpdesk.category}</div>
            <div className='w-1/4 text-center items-center justify-center flex'>{helpdesk.description}</div>
            <div className='w-1/4 text-center items-center justify-center flex '>
                <Dialog>
                    <DialogTrigger><Button className='bg-gray-2 hover:bg-gray-500'>Open</Button></DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className='text-2xl font-extrabold text-center'>Your Query</DialogTitle>

                        </DialogHeader>
                        <div className='flex flex-col w-full h-fit gap-4'>
                            <p>Query ID-{helpdesk.requestid}</p>
                            <ScrollArea className='bg-gray-2 w-full min-h-[200px]'>
                            <div className='flex flex-col w-full h-fit gap-4 p-2 justify-start'>
                                <p>you: {helpdesk.data.q1}</p>
                            </div>
                            {helpdesk.data.r1?<div className='flex flex-col w-full h-fit gap-4 p-2 justify-start'>
                                <p>Reply: {helpdesk.data.r1}</p>
                            </div>:<></>}
                            </ScrollArea>
                            <Textarea placeholder="Type your message here." />
                        </div>
                    </DialogContent>
                </Dialog>

            </div>        </div>
    )
}