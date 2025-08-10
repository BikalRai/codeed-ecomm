interface FooterLinkHeaderProps {
  linkTitle: string;
}

const FooterLinkHeader: React.FC<FooterLinkHeaderProps> = ({ linkTitle }) => {
  return (
    <div className='text-xl font-bold after:content[""] after:block after:h-0.5 after:bg-white after:mt-4 w-fit'>
      {linkTitle}
    </div>
  );
};

export default FooterLinkHeader;
