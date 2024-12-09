"use client"

import type * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import * as React from "react"
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue)

const FormItem = ({ className, ...props }: React.ComponentProps<"div">) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={cn("flex flex-col gap-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
}
FormItem.displayName = "FormItem"

const FormLabel = ({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) => {
  const { error, formItemId } = useFormField()

  return <Label className={cn(error && "text-destructive", className)} htmlFor={formItemId} {...props} />
}
FormLabel.displayName = "FormLabel"

const FormControl = ({ ...props }: React.ComponentProps<typeof Slot>) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  )
}
FormControl.displayName = "FormControl"

const FormDescription = ({ className, ...props }: React.ComponentProps<"p">) => {
  const { formDescriptionId } = useFormField()

  return <p id={formDescriptionId} className={cn("text-sm text-muted-foreground", className)} {...props} />
}
FormDescription.displayName = "FormDescription"

const FormMessage = ({ className, children, ...props }: React.ComponentProps<"p">) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      id={formMessageId}
      className={cn("text-sm font-normal text-muted-foreground", error && "font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
}
FormMessage.displayName = "FormMessage"

export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField }
