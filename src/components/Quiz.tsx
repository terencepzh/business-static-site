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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const formSchema = z.object({
  who: z.string().min(1, { message: "Please select an option" }),
  pass: z.string().min(1, { message: "Please select an option" }),
  age: z.string().min(1, { message: "Please select an option" }),
  education: z.string().min(1, { message: "Please select an option" }),
  salary: z.string().min(1, { message: "Please select an option" }),
  duration: z.string().min(1, { message: "Please select an option" }),
});

function Quiz() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      who: "",
      pass: "",
      age: "",
      education: "",
      salary: "",
      duration: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col gap-4 items-center px-6 py-8">
      <div className="flex flex-col gap-4 text-red-600 w-full">
        <h1 className="text-4xl xl:text-5xl text-center font-bold">
          Unlock Your Chances
        </h1>
        <h3 className="text-sm text-center">
          Want to know your probability of success? Try out our PR/Citizenship
          eligibility quiz for free!
        </h3>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-full max-w-screen-md"
        >
          {/* Page 1 */}
          <div className={`${page === 1 ? "block" : "hidden"}`}>
            <FormField
              control={form.control}
              name="who"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>I am enquiring for *</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Myself">Myself</SelectItem>
                      <SelectItem value="My Spouse">My Spouse</SelectItem>
                      <SelectItem value="My Child">My Child</SelectItem>
                      <SelectItem value="My parent">My parent</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pass"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    What is the applicant's current pass/residential status? *
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Employment Pass">
                        Employment Pass
                      </SelectItem>
                      <SelectItem value="S Pass">S Pass</SelectItem>
                      <SelectItem value="Dependent Pass/LTVP">
                        Dependent Pass/LTVP
                      </SelectItem>
                      <SelectItem value="Student Pass">Student Pass</SelectItem>
                      <SelectItem value="Entre Pass">Entre Pass</SelectItem>
                      <SelectItem value="Work Permit">Work Permit</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is the applicant's age group? *</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Under 21">Under 21</SelectItem>
                      <SelectItem value="21-40">21-40</SelectItem>
                      <SelectItem value="Over 40">Over 40</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    What is the applicant's highest level of education? *
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Primary or Elementary School">
                        Primary or Elementary School
                      </SelectItem>
                      <SelectItem value="Secondary or High School">
                        Secondary or High School
                      </SelectItem>
                      <SelectItem value="Diploma or Equivalent">
                        Diploma or Equivalent
                      </SelectItem>
                      <SelectItem value="Bachelor's Degree">
                        Bachelor's Degree
                      </SelectItem>
                      <SelectItem value="Master's">Master's</SelectItem>
                      <SelectItem value="PhD">PhD</SelectItem>
                      <SelectItem value="MD">MD</SelectItem>
                      <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    What is the applicant's monthly salary range? *
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="">
                      <SelectItem value="Not Applicable">
                        Not Applicable
                      </SelectItem>
                      <SelectItem value="Under S$2000">Under S$2000</SelectItem>
                      <SelectItem value="S$2000 - 4000">
                        S$2000 - 4000
                      </SelectItem>
                      <SelectItem value="S$4001 - 6000">
                        S$4001 - 6000
                      </SelectItem>
                      <SelectItem value="S$6001 - 8000">
                        S$6001 - 8000
                      </SelectItem>
                      <SelectItem value="S$8001 - 10000">
                        S$8001 - 10000
                      </SelectItem>
                      <SelectItem value="Over S$10000">Over S$10000</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  What is the applicant's monthly salary range? *
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="">
                    <SelectItem value="Not Applicable">
                      Not Applicable
                    </SelectItem>
                    <SelectItem value="Under S$2000">Under S$2000</SelectItem>
                    <SelectItem value="S$2000 - 4000">S$2000 - 4000</SelectItem>
                    <SelectItem value="S$4001 - 6000">S$4001 - 6000</SelectItem>
                    <SelectItem value="S$6001 - 8000">S$6001 - 8000</SelectItem>
                    <SelectItem value="S$8001 - 10000">
                      S$8001 - 10000
                    </SelectItem>
                    <SelectItem value="Over S$10000">Over S$10000</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div
            className={`flex ${page === 1 ? "justify-end" : "justify-between"}`}
          >
            <Button
              className={`bg-red-600 ${page === 1 ? "hidden" : "block"}`}
              onClick={() => setPage(page - 1)}
            >
              Back
            </Button>
            <Button
              className={`bg-red-600 ${page === 3 ? "hidden" : "block"}`}
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
            <Button
              className={`bg-red-600 ${page === 3 ? "block" : "hidden"}`}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Quiz;
