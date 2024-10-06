"use client"

import { Chapter } from "@prisma/client"
import { useEffect, useState } from "react";
import {
    DragDropContext,
    Droppable,
    
} from "@hello-pangea/dnd"

interface ChaptersListProps{
    items: Chapter[];
    onReorder: (updateData: {id:string,positrion:number}[]) => void;
    onEdit: (id:string) => void;
}

export const ChaptersList = ({
    items,
    onReorder,
    onEdit
}:ChaptersListProps) =>{
    const [isMounted,setIsMounted] = useState(false);
    const [chapters,setChapters] = useState(items);

    useEffect(()=>{
        setIsMounted(true)
    },[isMounted])

    useEffect(()=>{
        setChapters(items)
    },[items])

    if(!isMounted){
        return null
    }





    return(
    <div>
        ChaptersList
    </div>
    )
}