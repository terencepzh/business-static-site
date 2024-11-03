import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

function Faq() {
  const [citizenship, setCitizenship] = useState(true);
  const [pr, setPr] = useState(false);
  const [work, setWork] = useState(false);

  return (
    <div className="flex flex-col gap-4 bg-white text-left px-6 py-8">
      <h1 className="text-red-600 text-4xl xl:text-5xl text-center font-bold">
        Frequently Asked Questions
      </h1>
      {/* Toggle Groups */}
      <div className="">
        <ToggleGroup
          type="single"
          className="flex justify-start items-center mt-4"
        >
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="[&[data-state=on]]:text-red-600 [&[data-state=on]]:bg-red-600/20"
            onClick={() => {
              setPr(false);
              setWork(false);
              return citizenship ? citizenship : setCitizenship(!citizenship);
            }}
          >
            Singapore Citizenship
          </ToggleGroupItem>
          <ToggleGroupItem
            value="italic"
            aria-label="Toggle italic"
            className="[&[data-state=on]]:text-red-600 [&[data-state=on]]:bg-red-600/20"
            onClick={() => {
              setCitizenship(false);
              setWork(false);
              return pr ? pr : setPr(!pr);
            }}
          >
            Singapore Permanent Residency
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
            className="[&[data-state=on]]:text-red-600 [&[data-state=on]]:bg-red-600/20"
            onClick={() => {
              setCitizenship(false);
              setPr(false);
              return work ? work : setWork(!work);
            }}
          >
            Work Pass
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      {/* Singapore Citizenship */}
      <Accordion
        type="single"
        collapsible
        className="*:*:[&[data-state=open]]:text-red-600"
      >
        <AccordionItem
          value="item-1"
          className={`${citizenship ? "block" : "hidden"}  w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            What are the eligibility criteria to apply for Singapore citizenship
            as a foreigner?
          </AccordionTrigger>
          <AccordionContent>
            To apply for Singapore citizenship, you must meet one of the
            following criteria:
            <ul className="list-disc list-inside">
              <li>
                Be a <b>Singapore Permanent Resident (PR)</b> for at least{" "}
                <b>2 years</b> and be at least <b>21 years old</b>.
              </li>
              <li>
                Be married to a <b>Singapore Citizen</b> and have been a PR for
                at least <b>2 years</b>.
              </li>
              <li>
                Be a <b>PR student</b> who has resided in Singapore for more
                than <b>3 years</b> (of which <b>at least 1 year</b> was as a
                PR) and passed at least one national examination (e.g., PSLE,
                GCE ‘N’/‘O’/‘A’ Levels).
              </li>
              <li>
                Be a <b>PR child</b> born to a Singapore Citizen. years.
              </li>
              <li>
                Be a <b>PR aged 50 and above</b>, who has been residing in
                Singapore for more than <b>20 years</b>.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className={`${citizenship ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            How long does the Singapore citizenship application process take?
          </AccordionTrigger>
          <AccordionContent>
            The <b>Immigration and Checkpoints Authority (ICA)</b> typically
            takes <b>6 to 12 months</b> to process a Singapore citizenship
            application. The processing time may vary depending on the
            individual’s profile and the supporting documents provided.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className={`${citizenship ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            Do I need to renounce my current citizenship to become a Singapore
            citizen?
          </AccordionTrigger>
          <AccordionContent>
            Yes, Singapore does not allow <b>dual citizenship</b>. If your
            Singapore citizenship application is successful, you will need to{" "}
            <b>renounce your current citizenship</b> and submit proof of
            renunciation to the ICA. This is typically done before your
            citizenship registration is complete.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className={`${citizenship ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            Will I need to serve National Service (NS) if I become a Singapore
            citizen?
          </AccordionTrigger>
          <AccordionContent>
            Male citizens are required to serve <b>National Service (NS)</b>. If
            you are <b>below the age of 40 (for non-officers)</b> or{" "}
            <b>50 (for officers)</b>, you may be required to serve. Male
            children of new citizens will also be subject to the{" "}
            <b>NS requirement</b> upon turning 18.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className={`${citizenship ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            How will I know if my citizenship application is approved?
          </AccordionTrigger>
          <AccordionContent>
            The <b>ICA</b> will notify successful applicants by mail. You will
            then be required to complete certain formalities, such as attending
            a <b>citizenship ceremony</b>, where you will receive your{" "}
            <b>Singapore Citizenship Certificate</b> and{" "}
            <b>Singapore Identity Card (NRIC)</b>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-6"
          className={`${citizenship ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            If my citizenship application is rejected, how soon can I reapply?
          </AccordionTrigger>
          <AccordionContent>
            If your Singapore citizenship application is rejected, you must wait{" "}
            <b>at least 2 years</b> before submitting a new application. During
            this time, you can work on improving your profile, such as your
            contribution to the Singapore economy and society, to increase your
            chances of approval in the future.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-7"
          className={`${citizenship ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            Can I apply for Singapore citizenship if I’m living overseas?
          </AccordionTrigger>
          <AccordionContent>
            No, you must be residing in Singapore at the time of your
            application. Additionally, you are required to attend the{" "}
            <b>citizenship ceremony</b> in person if your application is
            successful, so you must plan to be in Singapore for these
            formalities.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-8"
          className={`${citizenship ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            Can I include my family in my PR application?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you can include your <b>spouse</b> and{" "}
            <b>unmarried children under 21</b> in your PR application, and
            Assurance Immigration is able to do that for you! They will need to
            submit the necessary supporting documents (e.g., marriage or birth
            certificates). Aged parents may apply separately under a different
            PR category, but cannot be included in the main application.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-9"
          className={`${citizenship ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            Do I need to renounce my current citizenship to apply for Singapore
            PR?
          </AccordionTrigger>
          <AccordionContent>
            No, <b>Singapore PR status</b> does not require you to renounce your
            current citizenship. PR status allows you to maintain your original
            citizenship while enjoying many benefits of residency in Singapore.
            However, if you later apply for <b>Singapore citizenship</b>, you
            will need to renounce your current citizenship.
          </AccordionContent>
        </AccordionItem>
        {/* Singapore PR */}
        <AccordionItem
          value="item-10"
          className={`${pr ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            What are the eligibility criteria for applying for Singapore
            Permanent Residency (PR)?
          </AccordionTrigger>
          <AccordionContent>
            To apply for Singapore citizenship, you must meet one of the
            following criteria:
            <ul className="list-disc list-inside">
              <li>
                Hold an <b></b>Employment Pass (EP), <b>S Pass</b>,{" "}
                <b>Personalised Employment Pass (PEP)</b>, or <b>EntrePass</b>,
                and have worked in Singapore for at least 6 months.
              </li>
              <li>
                Be the <b>spouse or unmarried child under 21</b> of a Singapore
                Citizen or PR.
              </li>
              <li>
                Be the <b>aged parent</b> of a Singapore Citizen.
              </li>
              <li>
                Hold a <b>Student Pass</b>, have lived in Singapore for at least
                2 years, and passed at least one national exam (PSLE, GCE 'N',
                'O', or 'A' levels) or be enrolled in the Integrated Programme.
              </li>
              <li>
                Be a foreign investor approved under the{" "}
                <b>Global Investor Programme (GIP)</b>.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-11"
          className={`${pr ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            How long does it take to process a Singapore PR application?
          </AccordionTrigger>
          <AccordionContent>
            Typically, the <b>Immigration and Checkpoints Authority (ICA)</b>{" "}
            takes <b>4 to 6 months</b> to process PR applications. In some
            cases, the processing time may be longer, depending on the
            completeness of the application and the individual's profile.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-12"
          className={`${pr ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            How can I improve my chances of getting PR approval?
          </AccordionTrigger>
          <AccordionContent>
            To improve your chances of obtaining PR status, focus on these
            factors:
            <ul className="list-disc list-inside">
              <li>
                <b>Employment stability</b> and a strong record of{" "}
                <b>contributing to the economy</b>.
              </li>
              <li>
                Demonstrating <b>family ties</b> to Singapore (such as having a
                spouse or children who are Singaporean citizens).
              </li>
              <li>
                <b>Contributions to society</b>, including volunteering or
                community involvement.
              </li>
              <li>
                Meeting or exceeding{" "}
                <b>financial and educational qualifications</b>. Ensuring that
                all documents are complete and accurate also helps streamline
                the application process.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-13"
          className={`${pr ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            What are the benefits of becoming a Singapore PR?
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside">
              As a Singapore PR, you will enjoy many benefits, including:
              <li>
                <b>Flexibility in employment</b>, as you are no longer tied to
                your employer for your visa status.
              </li>
              <li>
                The ability to <b>purchase property</b>, including certain
                government-subsidized flats (after 3 years of PR status).
              </li>
              <li>
                Access to the <b>Central Provident Fund (CPF)</b>, which helps
                with retirement, healthcare, and housing savings.
              </li>
              <li>
                <b>Priority admissions</b> for your children to local schools.
              </li>
              <li>
                Greater <b>visa flexibility</b> for entering and leaving
                Singapore.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-14"
          className={`${pr ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            Will I need to serve National Service (NS) if I become a Singapore
            PR?
          </AccordionTrigger>
          <AccordionContent>
            If you are a <b>male PR</b> who obtained PR status through your
            parents (before the age of 18), or if you have a <b>male child</b>{" "}
            under the age of 16½, <b>National Service (NS)</b> will be required.
            All male PRs who are subject to NS must register at 16½ and serve
            two years of full-time NS at 18, followed by yearly reservist
            obligations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-15"
          className={`${pr ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            Can I apply for PR while living outside of Singapore?
          </AccordionTrigger>
          <AccordionContent>
            No, you must be <b>physically residing in Singapore</b> at the time
            of your PR application, and you need to hold a valid work pass
            (e.g., Employment Pass, S Pass) if you are applying as a working
            professional.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-16"
          className={`${pr ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            Can I apply for PR if I am self-employed or a business owner?
          </AccordionTrigger>
          <AccordionContent>
            Yes, if you are a <b>business owner or entrepreneur</b>, you can
            apply for PR if you hold an <b>EntrePass</b> or are applying under
            the <b>Global Investor Programme (GIP)</b>. You will need to meet
            the relevant investment and business growth criteria as outlined by
            the government. Assurance Immigration is experienced with the{" "}
            <b>Global Investor Programme (GIP)</b> and{" "}
            <b>Business Relocation Programme</b> as well.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-17"
          className={`${pr ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            How will I know if my PR application is successful?
          </AccordionTrigger>
          <AccordionContent>
            You will be notified by ICA via <b>email or post</b> if your
            application is approved. Following approval, you will need to
            complete the formalities, such as providing biometric data and
            attending an appointment at ICA. Afterward, you will receive your{" "}
            <b>Singapore PR card</b>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-18"
          className={`${pr ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            What happens if my PR application is rejected?
          </AccordionTrigger>
          <AccordionContent>
            If your application is rejected, you can{" "}
            <b>reapply after 6 months</b>. During this time, it is advisable to
            improve your profile (e.g., through career advancement,
            contributions to society) before resubmitting your application.
          </AccordionContent>
        </AccordionItem>

        {/* Work Pass */}
        <AccordionItem
          value="item-19"
          className={`${work ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            What is a work pass in Singapore, and who needs one?
          </AccordionTrigger>
          <AccordionContent>
            A <b>work pass</b> is a permit that allows foreigners to work
            legally in Singapore. All foreign nationals, regardless of their
            occupation or industry, must hold a valid work pass or visa to be
            employed in Singapore. Different types of work passes apply
            depending on the qualifications, job type, and salary.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-20"
          className={`${work ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            What are the main types of work passes available for foreigners?
          </AccordionTrigger>
          <AccordionContent>
            There are several types of work passes for foreigners in Singapore,
            including:
            <ul className="list-disc list-inside">
              <li>
                <b>Employment Pass (EP):</b> For professionals, managers, and
                executives (PMEs) earning a minimum of <b>S$5,000</b> per month
                (S$5,500 for those in the financial services sector). Applicants
                must have recognized qualifications and relevant work
                experience.
              </li>
              <li>
                <b>S Pass:</b> For mid-skilled workers earning at least{" "}
                <b>S$3,150</b> per month. This pass is aimed at technicians and
                specialists with relevant qualifications (e.g., diplomas or
                technical certificates) and work experience.
              </li>
              <li>
                <b>Personalised Employment Pass (PEP):</b> A special work pass
                for high-earning individuals (earning at least{" "}
                <b>S$12,000 per month</b>) or Employment Pass holders who have
                worked in Singapore for some time. The PEP offers greater
                flexibility, allowing holders to change jobs without applying
                for a new pass, but it cannot be renewed.
              </li>
              <li>
                <b>EntrePass:</b> For foreign entrepreneurs who want to start
                and operate a business in Singapore. Applicants must meet
                specific business criteria, such as having a high-growth
                company, receiving funding from recognized investors, or
                demonstrating innovation.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-21"
          className={`${work ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            What is the difference between an Employment Pass (EP) and an S
            Pass?
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside">
              <li>
                <b>Employment Pass (EP):</b> Designed for{" "}
                <b>higher-skilled professionals</b> earning at least{" "}
                <b>S$5,000</b> monthly (S$5,500 for financial services).
                Applicants usually hold a degree and have significant work
                experience in professional or managerial roles.
              </li>
              <li>
                <b>S Pass:</b> Designed for mid-skilled workers, such as
                technicians and specialists, earning at least <b>S$3,150</b> per
                month. Applicants must have relevant qualifications, such as a
                diploma or technical certification, and meet additional criteria
                set by the Ministry of Manpower (MOM).
              </li>
            </ul>
            Additionally, the <b>quota system</b> applies to the S Pass, meaning
            employers are limited in the number of S Pass holders they can hire,
            based on the number of local employees they have.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-22"
          className={`${work ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            What is the Personalised Employment Pass (PEP) and how is it
            different from the regular Employment Pass?
          </AccordionTrigger>
          <AccordionContent>
            The <b>Personalised Employment Pass (PEP)</b> is a more flexible
            work pass aimed at <b>high-earning professionals</b> or those with
            significant experience:
            <ul className="list-disc list-inside">
              <li>
                <b>Salary Requirement:</b> You need to earn at least{" "}
                <b>S$12,000</b> monthly, or you must already hold an EP with a
                minimum salary of S$10,000 per month in the last 6 months.
              </li>
              <li>
                <b>Flexibility:</b> PEP holders can switch jobs without applying
                for a new pass, unlike regular EP holders.
              </li>
              <li>
                <b>Duration:</b> The PEP is issued for <b>3 years</b> and is{" "}
                <b>non-renewable</b>. However, PEP holders cannot start their
                own business in Singapore. They must work for an employer, but
                they have greater flexibility in changing jobs across
                industries.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-23"
          className={`${work ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            What is the EntrePass, and who is eligible?
          </AccordionTrigger>
          <AccordionContent>
            The <b>EntrePass</b> is a work pass for foreign entrepreneurs who
            want to start and run a business in Singapore. It is aimed at
            individuals with innovative business ideas or businesses that have
            high-growth potential. To be eligible for an EntrePass, you must
            meet one or more of the following criteria:
            <ul className="list-disc list-inside">
              <li>
                Be funded by a <b>government-accredited venture capital</b> or
                business angel.
              </li>
              <li>
                Hold <b>intellectual property</b> for innovative ideas.
              </li>
              <li>
                Have a <b>track record</b> of starting and scaling up companies.
                Additionally, the business must be registered in Singapore as a{" "}
                <b>Private Limited Company</b>, and the entrepreneur must hold
                at least <b>30% ownership</b> of the business.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-24"
          className={`${work ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            Can an S Pass holder apply for PR in Singapore?
          </AccordionTrigger>
          <AccordionContent>
            Yes, <b>S Pass</b> holders are eligible to apply for{" "}
            <b>Permanent Residency (PR)</b> in Singapore. However, PR
            applications are subject to approval by the Immigration and
            Checkpoints Authority (ICA), which considers factors such as
            employment stability, contribution to the Singapore economy, and
            family ties to Singapore.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-25"
          className={`${work ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            Can I apply for Singapore PR while holding a work pass?
          </AccordionTrigger>
          <AccordionContent>
            Yes, as a holder of an <b>Employment Pass (EP)</b>, S Pass, or{" "}
            <b>PEP</b>, you are eligible to apply for{" "}
            <b> Permanent Residency (PR)</b> in Singapore. You should typically
            have worked in Singapore for at least <b>6 months</b> before
            applying. The approval of your PR application is subject to the
            discretion of the Immigration and Checkpoints Authority (ICA).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-26"
          className={`${work ? "block" : "hidden"} w-full`}
        >
          <AccordionTrigger className="[&[data-state=open]]:text-red-600 text-left">
            How long does it take to process a work pass application?
          </AccordionTrigger>
          <AccordionContent>
            Processing times for work passes generally vary depending on the
            type of pass and individual circumstances:
            <ul className="list-disc list-inside">
              <li>
                <b>Employment Pass (EP):</b> Typically takes <b>3 to 8 weeks</b>{" "}
                for processing.
              </li>
              <li>
                <b>S Pass:</b> Usually takes around <b>3 weeks</b>.
              </li>
              <li>
                <b>EntrePass:</b> Takes about <b>8 weeks</b> as additional
                verifications are required for business-related criteria. These
                timelines can be longer if additional documents or verifications
                are required by the Ministry of Manpower (MOM).
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Faq;
