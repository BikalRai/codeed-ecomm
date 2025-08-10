import FooterLink from "./FooterLink";
import FooterLinkHeader from "./FooterLinkHeader";

interface ServiceLinkTypes {
  id: number;
  name: string;
}

const serviceLinks: ServiceLinkTypes[] = [
  { id: 1, name: "About Us" },
  { id: 2, name: "Terms & Conditions" },
  { id: 3, name: "FAQ" },
  { id: 4, name: "Privacy Policy" },
  { id: 5, name: "E-waste Policy" },
  { id: 6, name: "Cancellation & Return Policy" },
];

const CustomerServicersLinks = () => {
  return (
    <div className='grid gap-5'>
      <FooterLinkHeader linkTitle='Customer Services' />
      <ul className='grid gap-5 ms-6'>
        {serviceLinks.map((link) => (
          <FooterLink key={link.id} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default CustomerServicersLinks;
