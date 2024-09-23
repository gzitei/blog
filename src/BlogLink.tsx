import { Link, LinkProps } from "react-router-dom";

const BlogLink = ({ to, ...rest }: LinkProps) => {
  return <Link to={`/blog${to}`} {...rest} />;
};

export default BlogLink;
