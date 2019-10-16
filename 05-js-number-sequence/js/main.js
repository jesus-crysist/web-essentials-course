function balancedTernary(len) {

  const arr = [];

  const sumDigits = (digits) => {
    let result = 0;

    digits.forEach((d, index) => {
      result += ((d === '2' ? -1 : Number.parseInt(d, 3)) * Math.pow(3, index));
    }, 0);

    return result;
  };

  for (let n = 0; n < len; n++) {

    const ternaryStr = n.toString(3);
    const terStrDigits = ternaryStr.split('');
    const terDigitsRevert = terStrDigits.reverse();

    arr.push(sumDigits(terDigitsRevert));
  }

  return arr;
}

function wisteria(len) {

  const arr = [];

  const digitMultiplication = (num) => {
    const digitsStr = num.toString();
    const digitsArr = digitsStr.split('');
    return digitsArr.reduce((val, d) => val * (d !== '0' ? Number.parseInt(d) : 1), 1);
  };

  for (let n = 1; n < len; n++) {

    if (n > 9) {
      let result = digitMultiplication(n);

      arr.push(n - result)
    } else {
      arr.push(0);
    }
  }

  return arr;
}

function flyStraight(len) {

  const arr = [];

  for (let n = 0; n < len; n++) {

    if (n === 0 || n === 1) {
      arr.push(1);
      continue;
    }

    const prevN = arr[n - 1];
    const gcdOfNAndPrevN = gcd(n, prevN);

    if (gcdOfNAndPrevN > 1) {
      arr.push(prevN / gcdOfNAndPrevN);
    } else {
      arr.push(arr[n - 1] + n + 1);
    }
  }

  return arr;
}

function drawGraph(func) {

  const data = func(2000);
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
