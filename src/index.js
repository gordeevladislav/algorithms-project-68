const buildRouteResult = (route, path) => {
  const res = { path, handler: route.handler, params: { } };

  const routeParts = route.path.split('/');
  const pathParts = path.split('/');

  for (let i = 0; i < routeParts.length; i++) {
    const isParam = routeParts[i].startsWith(':');
    if (isParam) {
      res.params[routeParts[i].slice(1)] = pathParts[i];
    }
  }

  return res;
};

const findRoute = (routes, path) => {
  for (const route of routes) {
    const routeParts = route.path.split('/');
    const pathParts = path.split('/');
  
    if (routeParts.length !== pathParts.length) {
      continue;
    }

    return route;
  }

  return null;
}

const serve = (routes, path) => {
  const route = findRoute(routes, path);
  return buildRouteResult(route, path); 
};

export default serve;
