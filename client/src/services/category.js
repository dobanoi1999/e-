export function getCategories(params) {
  return {
    url: "/api/category",
    method: "get",
    params,
  };
}

export function getCategory(id) {
  return {
    url: `/api/category/${id}`,
    method: "get",
  };
}

export function createCategory(data) {
  return {
    url: "/api/category",
    method: "post",
    data,
  };
}

export function updateCategory(id, data) {
  return {
    url: `/api/category/${id}`,
    method: "put",
    data,
  };
}

export function deleteCategory(id) {
  return {
    url: `/api/category/${id}`,
    method: "delete",
  };
}
