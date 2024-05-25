"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/tailwind-utils"
import { HireMeFormValidation } from "@/schemas/hire-me-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { z } from "zod"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

type HireMeFormSchemaType = z.infer<typeof HireMeFormValidation>
type HireMeFormProps = {
  className?: string
}

const HireMeForm = (props: HireMeFormProps) => {
  const {
    reset,
    formState: { isSubmitting, errors, ...formState },
    ...form
  } = useForm<HireMeFormSchemaType>({
    resolver: zodResolver(HireMeFormValidation),
    mode: "onChange",
    defaultValues: {
      email: "",
      subject: "",
      messages: "",
    },
  })

  async function onSubmit(values: HireMeFormSchemaType) {
    console.log(values)
  }

  return (
    <Form
      {...form}
      reset={reset}
      formState={{ ...formState, errors, isSubmitting }}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-8", props.className)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Type your subject..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="messages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Messages</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your Messages..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {isSubmitting && (
            <AiOutlineLoading3Quarters className="animate-spin" />
          )}
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default HireMeForm
