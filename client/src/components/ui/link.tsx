import NextLink from "next/link";
interface ILinkProps {
  href: string;
  children: any;
  className?: string;
}
const link = ({ href, children, className, ...props }: ILinkProps) => {
  return (
    <NextLink href={href}>
      <a className={className} {...props}>
        {children}
      </a>
    </NextLink>
  );
};

export default link;
