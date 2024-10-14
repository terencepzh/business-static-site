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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  fullname: z.string().min(2).max(50),
  pass: z.string(),
  mobile: z.string().min(8).max(10),
  interest: z.string(),
  message: z.string(),
});

function ConsultForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-full"
        >
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="eg. John Lim Kim Wee"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pass"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Pass / Residential Status</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Employment Pass">
                        Employment Pass
                      </SelectItem>
                      <SelectItem value="S Pass">S Pass</SelectItem>
                      <SelectItem value="DP/LTVP/LTVP+">
                        DP/LTVP/LTVP+
                      </SelectItem>
                      <SelectItem value="Student Pass">Student Pass</SelectItem>
                      <SelectItem value="PE/Entre Pass">
                        PE/Entre Pass
                      </SelectItem>
                      <SelectItem value="Work Pass/Work Permit">
                        Work Pass/Work Permit
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
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
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Interested In</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Singapore PR">Singapore PR</SelectItem>
                      <SelectItem value="Citizenship">Citizenship</SelectItem>
                      <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
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
              </FormItem>
            )}
          />
          <Button
            className="bg-orange-500"
            type="submit"
          >
            Book Your Consultation
          </Button>
        </form>
      </Form>
      <h3 className="text-center text-sm font-light">
        By submitting this form, you agree to our site's <u>privacy policy</u>.
      </h3>
    </>
  );
}

export default ConsultForm;
