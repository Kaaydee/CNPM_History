"use client"

import * as React from "react"
import { format } from "date-fns"
import { vi } from "date-fns/locale"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerDemoProps {
  onDateChange?: (date: Date) => void; // Callback để nhận giá trị ngày đã chọn
}

export function DatePickerDemo({ onDateChange }: DatePickerDemoProps) {
  const [date, setDate] = React.useState<Date>(new Date())
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate)
      setIsPopoverOpen(false) // Đóng popover sau khi chọn ngày
      if (onDateChange) {
        onDateChange(selectedDate) // Gọi callback với ngày đã chọn
      }
    }
  }

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <div className="flex pl-10 space-x-2">
          <CalendarIcon className="h-10 w-10 text-blue-500 items-center" />
          <Button
            variant={"outline"}
            className={cn(
              "w-36 justify-center text-blue-500 font-extrabold italic text-left hover:via-cyan-700",
              !date && "text-muted-foreground"
            )}
            onClick={() => setIsPopoverOpen(true)}
          >
            {date ? format(date, "dd/MM/yyyy", { locale: vi }) : <span>Tất cả</span>}
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePickerDemo;
