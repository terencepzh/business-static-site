import Overview from "@/components/Overview";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  who: z.string().min(1, { message: "Please select an option" }),
  pass: z.string().min(1, { message: "Please select an option" }),
  age: z.string().min(1, { message: "Please select an option" }),
  education: z.string().min(1, { message: "Please select an option" }),
  salary: z.string().min(1, { message: "Please select an option" }),
  duration: z.string().min(1, { message: "Please select an option" }),
  participated: z.string().min(1, { message: "Please select an option" }),
  activities: z.string().min(1, { message: "Please select an option" }),
  property: z.string().min(1, { message: "Please select an option" }),
  insurance: z.string().min(1, { message: "Please select an option" }),
  name: z.string().min(1, { message: "Please select an option" }),
  mobile: z.string().min(1, { message: "Please select an option" }),
  email: z.string().min(1, { message: "Please select an option" }),
});

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNext = () => setCurrentStep(currentStep + 1);
  const handlePrevious = () => setCurrentStep(currentStep - 1);

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

  return (
    <>
      <div className="md:flex justify-evenly items-center">
        <div className="bg-[url('/home.jpg')] bg-no-repeat bg-cover bg-[65%] w-full h-[320px] md:h-[700px]">
          <div className="hidden md:flex flex-col justify-center items-center gap-4 bg-black/45 text-red-600 text-center w-full h-full px-6 py-8">
            <div className="flex flex-col justify-between items-center gap-4 max-w-screen-md h-4/5">
              <h1 className="flex flex-col gap-4 text-5xl lg:text-6xl xl:text-5xl font-bold">
                <p>Singapore's Leading</p>
                <p>Immigration Consultancy</p>
              </h1>
              <h3 className="text-white text-xl drop-shadow-lg">
                Your leading consultancy for Singapore immigration advice. Over
                20 years of providing unmatched service and excellence.
              </h3>
              <p className="text-4xl md:text-5xl text-white text-center font-bold drop-shadow-lg">
                Unlimited Warranty Till Approval!
              </p>
              <Button className="bg-red-600 text-white text-xl border rounded-full w-full max-w-sm h-16">
                <Link to="/contact-us">
                  Book your <span className="text-2xl font-bold">FREE</span>{" "}
                  consultation now
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex md:hidden flex-col justify-between items-center gap-4 text-red-600 text-center w-full px-6 py-8">
          <h1 className="text-4xl xl:text-5xl font-bold">
            Singapore's Leading Immigration Consultancy
          </h1>
          <h3 className="xl:text-lg tracking-wide">
            Your leading consultancy for Singapore immigration advice. Over 20
            years of providing unmatched service and excellence.
          </h3>
          <Button className="bg-red-600 text-white border rounded-full w-full max-w-sm h-12">
            <Link to="/contact-us">
              Book your <span className="text-base font-bold">FREE</span>{" "}
              consultation now
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-red-600 text-white text-center px-6 py-8">
        <h1 className="text-4xl xl:text-5xl text-center font-bold">
          Why SG Immigrations?
        </h1>
        <p className="text-sm xl:text-base">
          There are countless of immigration consulting firms in Singapore.
          <br />
          Here's why you should choose us.
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:justify-between max-w-screen-lg gap-4">
            <Card className="flex flex-col justify-between text-red-600">
              <CardHeader>
                <CardTitle>
                  <h1 className="text-4xl lg:text-5xl">20+</h1>
                  <h3 className="text-lg">
                    Years of Immigration Advisory Expertise
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sagittis mauris massa, id venenatis dolor congue ac.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col justify-between text-red-600">
              <CardHeader>
                <CardTitle className="text-lg">
                  <h1 className="text-4xl lg:text-5xl">90%</h1>
                  <h3>More Likely of Attaining Application Success</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sagittis mauris massa, id venenatis dolor congue ac.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col justify-between text-red-600">
              <CardHeader>
                <CardTitle className="text-lg">
                  <h1 className="text-4xl lg:text-5xl">24/7</h1>
                  <h3>Dedicated Customer Service Support</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sagittis mauris massa, id venenatis dolor congue ac.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-6">
          <h1 className="text-4xl xl:text-5xl text-center font-bold">
            Check your success rate now
          </h1>
          <p className="text-sm xl:text-base">
            Want to know the current state of your application details? Click on
            our free PR & Citizenship quiz below!
          </p>
          <Button
            className="bg-white text-red-600 text-xl border rounded-full w-full max-w-sm h-12"
            onClick={() =>
              document
                .getElementById("quiz")!
                .scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            Free PR & Citizenship Quiz
          </Button>
        </div>
      </div>
      {/* Nationalities */}
      <div className="flex flex-col justify-center items-center gap-4 text-red-600 text-center px-6 py-8">
        <h1 className="text-4xl lg:text-5xl text-center font-bold">
          We have helped multiple nationalities
        </h1>
        <h3 className="text-sm lg:text-base">
          Regardless of your country of origin, we will ensure that your chances
          to obtain PR & Citizenship is optimized.
        </h3>
        <div>Countries TBD</div>
      </div>
      {/* Testimonials */}
      <div className="flex flex-col gap-4 bg-red-600 text-white text-center px-6 py-8">
        <h1 className="text-4xl text-center font-bold">Our Testimonials</h1>
        <h3 className="text-sm">
          Hear more from our past clients on their experience with us!
        </h3>
        <div>Testimonials TBD</div>
      </div>
      <Overview />
      {/* Services */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center items-center gap-12 text-red-600 w-full px-6 py-8">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-4xl xl:text-5xl text-center font-bold">
              Our Services
            </h1>
            <h3 className="text-sm text-justify">
              At SG Immigrations, we specialize in helping foreigners navigate
              the path to a successful future in Singapore. With expertise in
              all immigration avenues, we work closely with you to identify the
              most suitable option and guide you through the process for a
              smooth and successful outcome.
            </h3>
          </div>
          <Services />
        </div>
      </div>
      {/* Quiz */}
      <div
        id="quiz"
        className="flex flex-col justify-center items-center gap-12 text-red-600 w-full px-6 py-8"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl xl:text-5xl text-center font-bold">Quiz</h1>
          <h3 className="text-center text-sm">
            <p>
              Want to know your probability of success? Try out our
              PR/Citizenship eligibility quiz for free!
            </p>
            <p>Note: WORK PERMIT CANNOT APPLY.</p>
          </h3>
        </div>
        {/* Step icons */}
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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-4 w-full max-w-screen-md"
          >
            {/* Page 1 */}
            {currentStep === 1 && (
              <div>
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
                        What is the applicant's current pass/residential status?
                        *
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
                          <SelectItem value="Student Pass">
                            Student Pass
                          </SelectItem>
                          <SelectItem value="Entre Pass">Entre Pass</SelectItem>
                          <SelectItem value="Work Permit">
                            Work Permit
                          </SelectItem>
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
                      <FormLabel>
                        What is the applicant's age group? *
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
                <div className="flex justify-end mt-8">
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
              <div className="flex flex-col gap-4">
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
                          <SelectTrigger className="w-full">
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
                          className="text-black h-20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between mt-8">
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
              <div className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="property"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>
                        Does the applicant own or is intending to own any
                        property in Singapore?*
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
                <div className="flex justify-between mt-8">
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
              <div className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
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
                        <Input {...field} />
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
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between mt-8">
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
    </>
  );
}

export default App;
