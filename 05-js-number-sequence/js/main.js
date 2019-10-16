function balancedTernary(len) {

  return [];
}

function wisteria(len) {

  return [];
}

function flyStraight(len) {

  return [];
}

function drawGraph(func) {

  const data = func(2000);
  console.log(data.slice(0, 100));
  const width = 960;
  const height = 500;
  const margin = {top: 20, right: 0, bottom: 30, left: 40};
  const color = '#999';

  d3.select('.chart svg').remove();

  const svg = d3.select('.chart')
                .append('svg:svg')
                .attr('viewBox', [0, 0, width, height]);

  const x = d3.scaleLinear()
              .domain([0, data.length])
              .range([margin.left, width - margin.right]);

  const y = d3.scaleLinear()
              .domain([d3.min(data), d3.max(data)])
              .range([height - margin.bottom, margin.top]);

  const xAxis = g => g
    .attr('transform', `translate(0,${height - margin.bottom})`)
    .attr('stroke', color)
    .call(d3.axisBottom(x).tickSizeOuter(0));

  const yAxis = g => g
    .attr('transform', `translate(${margin.left},0)`)
    .attr('stroke', color)
    .call(d3.axisLeft(y))
    .call(g => g.select('.domain').remove());

  svg.selectAll('circle')
        .data(data)
        .enter().append('svg:circle')
        .attr('transform', (d, i) => `translate(${x(i)}, ${y(d)})`)
        .attr('r', 1)
        .attr('fill', color)
        .attr('stroke', 'none');

  svg.append('svg:g')
     .call(xAxis);

  svg.append('svg:g')
     .call(yAxis);
}
