"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  encryptionKey: z.string().min(2, {
    message: "encryptionKey must be at least 2 characters.",
  }),
  encryptionKeyHint: z.string().min(2, {
    message: "encryptionKeyHint must be at least 2 characters.",
  }),
});

export default function CreateSiteForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      encryptionKeyHint: "",
      encryptionKey: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/site", values);

      form.reset();
      toast.success("added site");
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full flex flex-col"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Site Name</FormLabel>
              <FormControl>
                <Input placeholder="eg: facebook" {...field} />
              </FormControl>
              <FormDescription className="text-xs">
                site name is used to identify your site in the dashboard. you do
                not need to use the actual site name or include the url.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="encryptionKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Encryption Key</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription className="text-xs">
                NOTE: we do not store your encryption key. if you lose your
                encryption key, you will not be able to access the data related
                to this site. please keep your encryption key safe and configure
                a good hint. this cannot be updated.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="encryptionKeyHint"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Encryption Key Hint</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="eg: my chemistry teacher's name + my cat's birthday"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-xs">
                this hint will be shown to you if you forget your encryption
                key, please configure a good, memorable hint.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit mt-2 ml-auto">
          Submit
        </Button>
      </form>
    </Form>
  );
}
