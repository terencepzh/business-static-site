import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

function Quiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNext = () => setCurrentStep(currentStep + 1);
  const handlePrevious = () => {
    setSuccess(false);
    setCurrentStep(currentStep - 1);
  };
  const [success, setSuccess] = useState(false);

  const formSchema = z.object({
    who: z.string().min(1, { message: "Please select an option" }),
    pass: z.string().min(1, { message: "Please select an option" }),
    age: z.string().min(1, { message: "Please select an option" }),
    education: z.string().min(1, { message: "Please select an option" }),
    salary: z.string().min(1, { message: "Please select an option" }),
    duration: z.string().min(1, { message: "Please select an option" }),
    participated: z.string().min(1, { message: "Please select an option" }),
    activities: z.string().optional(),
    property: z.string().min(1, { message: "Please select an option" }),
    insurance: z.string().min(1, { message: "Please select an option" }),
    name: z.string().min(1, { message: "Please select an option" }),
    mobile: z.string().min(1, { message: "Please select an option" }),
    email: z.string().min(1, { message: "Please select an option" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      who: "",
      pass: "",
      age: "",
      education: "",
      salary: "",
      duration: "",
      participated: "",
      activities: "",
      property: "",
      insurance: "",
      name: "",
      mobile: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(import.meta.env.VITE_QUIZAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([
          [
            values.name,
            values.mobile,
            values.email,
            values.who,
            values.pass,
            values.age,
            values.education,
            values.salary,
            values.duration,
            values.participated,
            values.activities,
            values.property,
            values.insurance,
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
    <div className="flex flex-col gap-8 items-center bg-white/80 text-black rounded-xl w-full max-w-screen-sm px-6 py-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-red-600 text-center md:text-left text-lg font-bold">
          <p>Try out our PR/Citizenship eligibility quiz for free!</p>
          <p className="text-sm">Note: WORK PERMIT CANNOT APPLY.</p>
        </h3>
      </div>
      {/* Step Icons */}
      <div className="flex items-center space-x-2">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep === 1
              ? "bg-red-600 text-primary-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          1
        </div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep === 2
              ? "bg-red-600 text-primary-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          2
        </div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep === 3
              ? "bg-red-600 text-primary-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          3
        </div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep === 4
              ? "bg-red-600 text-primary-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          4
        </div>
      </div>
      {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-full max-w-screen-md"
        >
          {/* Page 1 */}
          {currentStep === 1 && (
            <div className="flex flex-col gap-6 text-start">
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
                        <SelectTrigger className="border-gray-500 w-full">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="">
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
                        <SelectTrigger className="border-gray-500 w-full">
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
                        <SelectItem value="Student Pass">
                          Student Pass
                        </SelectItem>
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
                        <SelectTrigger className="border-gray-500 w-full">
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
                        <SelectTrigger className="border-gray-500 w-full">
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
                        <SelectTrigger className="border-gray-500 w-full">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="">
                        <SelectItem value="Not Applicable">
                          Not Applicable
                        </SelectItem>
                        <SelectItem value="Under S$2000">
                          Under S$2000
                        </SelectItem>
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
                        <SelectItem value="Over S$10000">
                          Over S$10000
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end mt-2">
                <Button
                  className="bg-red-600"
                  onClick={handleNext}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
          {/* Page 2 */}
          {currentStep === 2 && (
            <div className="flex flex-col gap-6 text-start">
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      How long has the applicant been staying in Singapore? *
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-gray-500 w-full">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="">
                        <SelectItem value="Less than a year">
                          Less than a year
                        </SelectItem>
                        <SelectItem value="1-2 years">1-2 years</SelectItem>
                        <SelectItem value="3-5 years">3-5 years</SelectItem>
                        <SelectItem value="Over 5 years">
                          Over 5 years
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="participated"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>
                      Has the applicant participated in an Social Integration
                      Activities in Singapore?*
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Yes" />
                          </FormControl>
                          <FormLabel className="font-normal">Yes</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="No" />
                          </FormControl>
                          <FormLabel className="font-normal">No</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="activities"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      If yes, kindly indicate the activities or programmes.
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        {...field}
                        className="border-gray-500 text-black h-20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between mt-2">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                >
                  Previous
                </Button>
                <Button
                  className="bg-red-600"
                  onClick={handleNext}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
          {/* Page 3 */}
          {currentStep === 3 && (
            <div className="flex flex-col gap-6 text-start">
              <FormField
                control={form.control}
                name="property"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>
                      Does the applicant own or is intending to own any property
                      in Singapore?*
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Yes" />
                          </FormControl>
                          <FormLabel className="font-normal">Yes</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="No" />
                          </FormControl>
                          <FormLabel className="font-normal">No</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="insurance"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>
                      Does the applicant own or is intending to own any
                      insurance policy or investment products in Singapore?*
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Yes" />
                          </FormControl>
                          <FormLabel className="font-normal">Yes</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="No" />
                          </FormControl>
                          <FormLabel className="font-normal">No</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between mt-2">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                >
                  Previous
                </Button>
                <Button
                  className="bg-red-600"
                  onClick={handleNext}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
          {/* Personal Particulars */}
          {currentStep === 4 && (
            <div className="flex flex-col gap-6 text-start">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-gray-500"
                      />
                    </FormControl>
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
                        {...field}
                        className="border-gray-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-gray-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {success && (
                <p className="text-sm mx-auto">Successfully submitted!</p>
              )}
              <div className="flex justify-between mt-2">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                >
                  Previous
                </Button>
                <Button
                  className="bg-red-600"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}

export default Quiz;
