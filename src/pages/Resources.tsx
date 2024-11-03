import ResourceCard from "@/components/ResourceCard";

function Resources() {
  const Content = [
    {
      image:
        "https://static.wixstatic.com/media/a80fdd_b87d3b925e5545fdb362fe1af5eb6e20~mv2.jpg/v1/fill/w_581,h_327,fp_0.50_0.50,q_90,enc_auto/a80fdd_b87d3b925e5545fdb362fe1af5eb6e20~mv2.jpg",
      title:
        "7 Insider Tips to Boost Your Chances of PR Approval in Singapore!",
      caption:
        "As you step into your new role as a Permanent Resident (PR) in Singapore, one of the key aspects you'll encounter is the Central Provident Fund (CPF) scheme. This scheme plays a pivotal role in financial planning for both citizens and PRs alike. For new PR holders, it's crucial to understand that CPF contributions start from the day you gain your PR status. With this in mind, we now explore the specifics of one’s CPF contribution rates.",
      url: "/resources/article1",
    },
    { image: "", title: "", caption: "", url: "" },
    { image: "", title: "", caption: "", url: "" },
    { image: "", title: "", caption: "", url: "" },
    { image: "", title: "", caption: "", url: "" },
    { image: "", title: "", caption: "", url: "" },
    { image: "", title: "", caption: "", url: "" },
  ];
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 px-6 py-8">
      {Content.map((elem, index) => (
        <ResourceCard
          {...elem}
          key={index}
        />
      ))}
    </div>
  );
}

export default Resources;
