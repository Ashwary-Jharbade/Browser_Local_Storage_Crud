var data;

window.addEventListener("load", () => {
  if (localStorage.getItem("data"))
    data = JSON.parse(localStorage.getItem("data"));
  localStorage.setItem("data", JSON.stringify({}));
});

const create = (id, obj) => {
  if (data[id]) throw new Error(" Id is not unique ");
  data[id] = obj;
  localStorage.setItem("data", JSON.stringify(data));
};

const read = () => {
  return data;
};

const update = (id, obj) => {
  if (data[id] == null) throw new Error("Data with id does not exist");
  data[id] = obj;
  localStorage.setItem("data", JSON.stringify(data));
};

const del = (id) => {
  if (data[id] == null) throw new Error("Data with id does not exist");
  delete data[id];
  localStorage.setItem("data", JSON.stringify(data));
};
