"use client"
import React ,{useEffect, useState} from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"
import { Toast } from '@/components/ui/toast'
import HelpdeskCard from '@/components/HelpdeskCard'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from '@/components/ui/use-toast'
import { m } from 'framer-motion'


const helpdesk = () => {

    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [issues, setIssues] = useState<any>([])
    const fetchIssues  = async () => {
        fetch(`${process.env.API_ENDPOINT}/api/issue/getissuesbyuid`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid:JSON.parse(localStorage.getItem('user') || 'undefined').uid
            })
        })
            .then((response) => response.json())
            .then((data) => {
                setIssues(data.issues)
                console.log(data.issues)
            })
    }

    useEffect(() => {
        fetchIssues()
    }, [])



    const handleRaiseIssue = () => {
        const id = "EMM"+Date.now()
        try {
            fetch(`${process.env.API_ENDPOINT}/api/issue/createissue`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({  
                    category: category,
                    description: description,
                    id: id,
                    status: "open",
                    raisedBy:JSON.parse(localStorage.getItem('user') || 'undefined').uid
                })
            }
            )
                .then((response) => response.json())
                .then((data) => {
                    if (data.executed) {
                        toast({
                            title: "Success",
                            description: data.message,
                            variant: "default",
                            className: "bg-green-1 text-white"
                        })  
                    }
                    else {
                        toast({
                            title: "Error",
                            description: data.message,
                            variant: "destructive",
                           
                        })
                    }
                })
                .catch((error) => {
                    console.error('Error:', error as Error);
                    toast({
                        title: "Error",
                        description: "Error in raising an issue",
                        variant: "destructive",
                        className: "bg-red-1 text-white"
                    })
                })
                
        }
        catch (error) {
            toast({
                title: "Error",
                description: "Error in raising an issue",
                variant: "destructive",
                className: "bg-red-1 text-white"
            })
        }
        finally {
            setCategory('')
            setDescription('')
            fetchIssues()
        }
    
    }

    return (
        <div className='flex flex-col flex-grow w-full bg-white'>
            <div className='ps-10 p-8 font-extrabold text-2xl text-green-1 flex flex-row  items-center justify-between'>
                <div className='flex flex-row  items-center'>

                    Help Desk <div className='ps-2 text-sm '>(requests)</div>
                </div>
                <Dialog>
                    <DialogTrigger>
                        <Button className='bg-green-1 hover:bg-green-300 text-white'>Raise an issue</Button>
                    </DialogTrigger>
                    <DialogContent>
                    <div className='w-full h-fit flex flex-col justify-center items-center gap-4'>
                        <div className='font-extrabold text-2xl text-green-1'>Raise an issue</div>
                        <div className='w-full h-fit flex flex-col justify-start m-2 font-bold gap-3 text-xl'>
                            <div >Category</div>
                            <Textarea placeholder='Enter the category'  value={category} onChange={(e) => { setCategory(e.target.value) }}/>

                        </div>

                        <div className='w-full h-fit flex flex-col justify-start m-2 font-bold gap-3 text-xl'>
                            <div >Description</div>
                            <Textarea placeholder='Enter description'  value={description} onChange={(e) => { setDescription(e.target.value) }}/>

                        </div>
                        <Button className='bg-green-500 hover:bg-green-300' onClick={() => { handleRaiseIssue() }}>Submit</Button>
                    </div>
                    </DialogContent>
                </Dialog>

            </div>
            <div className='ps-9 pe-9'>
                {/* <Input type="text" placeholder={'\uf002 Search Requests'} style={{ fontFamily: "Arial, FontAwesome" }} /> */}
                <div className='border-2 rounded-2xl border-gray-2 w-full h-fit flex flex-col justify-center items-center'>
                    <div className='flex flex-row  w-full h-fit '>
                        <div className='flex flex-row  w-1/2 h-fit '>
                            <div className='flex flex-row justify-center w-1/2 h-fit p-3'>
                                <div className='bg-green-1 p-2 rounded-2xl text-white'>

                                    Open
                                </div>
                            </div>
                            <div className='flex flex-row justify-center w-1/2 h-fit p-3 '>
                                <div className='p-2'>

                                    Resolved
                                  </div>
                            </div>
                        </div>
                        <div className='flex flex-row  w-1/2 h-fit '></div>
                    </div>
                    <div className='flex flex-col  w-full h-fit border-t-2  border-gray-2 mt-4  pt-3 pb-3'>
                        <div className='flex flex-row  w-full h-fit mt-4 mb-4 '>

                            <div className='w-1/4 text-center font-extrabold'>
                                REQUEST ID
                            </div>

                            <div className='w-1/4 text-center font-extrabold'>
                                CATEGORY
                            </div>

                            <div className='w-1/4 text-center font-extrabold'>
                                DESCRIPTION
                            </div>

                            <div className='w-1/4 text-center font-extrabold'>
                                ACTION
                            </div>
                        </div>
                        {issues.map((issue:any) => {
                            return (
                                <HelpdeskCard helpdesk={{ requestid: issue.id, category: issue.data.category, description: issue.data.q1, data: issue.data }} />
                            )
                        })}
                       
                    </div>
                </div>

            </div>
            
        </div>
        
    )
}



export default helpdesk
