import FooterLinkHeader from "./FooterLinkHeader";
import FooterLink from "./FooterLink";

interface PopularLinksType {
  id: number;
  name: string;
}

const popularLinks: PopularLinksType[] = [
  { id: 1, name: "Staples" },
  { id: 2, name: "Beverages" },
  { id: 3, name: "Personal Care" },
  { id: 4, name: "Home Care" },
  { id: 5, name: "Baby Care" },
  { id: 6, name: "Vegetables & Fruits" },
  { id: 7, name: "Snacks & Foods" },
  { id: 8, name: "Dairy & Bakery" },
];

const MostPopularLinks = () => {
  return (
    <div className='grid gap-5'>
      <FooterLinkHeader linkTitle='Most Popular Categories' />
      <ul className='grid gap-5 ms-6'>
        {popularLinks.map((link) => (
          <FooterLink key={link.id} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default MostPopularLinks;
