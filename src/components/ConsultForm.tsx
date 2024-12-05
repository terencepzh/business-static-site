import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

function ConsultForm() {
  const [success, setSuccess] = useState(false);

  const formSchema = z.object({
    fullName: z.string().min(1, { message: "Name is required" }).max(50),
    pass: z.string().min(1, { message: "Please select an option" }),
    mobile: z.string().min(1, { message: "Mobile Number is required" }),
    interest: z.string().min(1, { message: "Please select an option" }),
    message: z.string(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      pass: "",
      mobile: "",
      interest: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(import.meta.env.VITE_CONSULTAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([
          [
            values.fullName,
            values.pass,
            values.mobile,
            values.interest,
            values.message,
            new Date().toLocaleString(),
          ],
        ]),
      });
      if (response.ok) {
        setSuccess(true);
        form.reset();
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-full max-w-screen-lg"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="eg. John Lim Kim Wee"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pass"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Pass / Residential Status</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Employment Pass">
                      Employment Pass
                    </SelectItem>
                    <SelectItem value="S Pass">S Pass</SelectItem>
                    <SelectItem value="DP/LTVP/LTVP+">DP/LTVP/LTVP+</SelectItem>
                    <SelectItem value="Student Pass">Student Pass</SelectItem>
                    <SelectItem value="PE/Entre Pass">PE/Entre Pass</SelectItem>
                    <SelectItem value="Work Pass/Work Permit">
                      Work Pass/Work Permit
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="91234567"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Interested In</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Singapore PR">Singapore PR</SelectItem>
                    <SelectItem value="Citizenship">Citizenship</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    {...field}
                    className="h-20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="bg-red-600"
            type="submit"
          >
            Book Your Consultation
          </Button>
        </form>
      </Form>
      {success && (
        <p>Successfully submitted! Refresh this page to submit again.</p>
      )}
      <h3 className="text-center text-sm font-light">
        By submitting this form, you agree to our site's <u>privacy policy</u>.
      </h3>
    </>
  );
}

export default ConsultForm;
