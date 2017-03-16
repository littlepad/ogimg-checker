const parseText = (value) => {
  const arr = value.split('\n');
  return arr;
};

const app = new Vue({
  el: '#ogImgList',
  data: {
    ogImgList: [],
  },
  methods: {
    fetch: (e) => {
      e.preventDefault();
      const request = new XMLHttpRequest();
      request.open('POST', '/api/ogimg/list', true);
      request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      request.onload = () => {
        console.log(request.response);
        const obj = JSON.parse(request.response);
        app.ogImgList = obj.ogImgList;
      };
      request.onerror = () => {
        console.log(request);
      };
      const textArea = document.getElementById('urls');
      const urls = parseText(textArea.value);
      console.log(urls);
      request.send(JSON.stringify({ urls }));
    },
  },
});
