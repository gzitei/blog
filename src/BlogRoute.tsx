import { Route, RouteProps } from "react-router-dom";

const BlogRoute = ({ path, ...rest }: RouteProps) => {
  const blogPath = `/blog${path}`;
  return <Route path={blogPath} {...rest} />;
};

export default BlogRoute;
