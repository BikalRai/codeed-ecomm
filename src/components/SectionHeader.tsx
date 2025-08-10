import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

interface SectionTypes {
  sectionPhrase: string;
  sectionName: string;
  path: string;
}

const SectionHeader = ({ sectionPhrase, sectionName, path }: SectionTypes) => {
  return (
    <div className='flex items-center justify-between mb-10 '>
      <h3 className='text-text text-2xl font-bold w-fit after:content[""] after:block after:h-1 after:bg-primary after:mt-4'>
        {sectionPhrase} <span className='text-primary'>{sectionName}</span>
      </h3>

      <Link
        to={path}
        className='flex items-center gap-2 text-heading font-medium transition hover:text-primary '
      >
        View All{" "}
        <span className='text-primary text-2xl'>
          <MdNavigateNext />
        </span>
      </Link>
    </div>
  );
};

export default SectionHeader;
