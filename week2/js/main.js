var vis = d3.select('#graph')
            .append('svg');

var w = 900,
    h = 400;

var color =  d3.scaleSequential(function(t) {
  return d3.hsl(t * 360, 1, 0.5) + "";
});

makeX = d3.randomUniform(10, 850);
makeY = d3.randomUniform(10, 350);
ranArray = d3.randomUniform(49);

// var nodes = [{x: 30, y: 50},
//              {x: 50, y: 80},
//              {x: 90, y: 120},
//              {x: 50, y: 331},
//              {x: 540, y: 303},
//              {x: 550, y: 301},
//              {x: 580, y: 207},
//              {x: 250, y: 103},
//              {x: 450, y: 240},
//              {x: 550, y: 170},
//              {x: 850, y: 180},
//              {x: 350, y: 260},
//              {x: 250, y: 140}];
var nodes = [];
for($i = 0; $i < 50; $i++) {
    nodes.push({x: makeX(), y: makeY()});
}

// var links = [{source: nodes[0], target: nodes[1]},
//              {source: nodes[2], target: nodes[1]}]
var links = [];
for(j = 0; j < 50; j++) {
    links.push({source: nodes[Math.round(ranArray())], target: nodes[j]});
}

vis.attr('width', w)
    .attr('height',h);

vis.append('text')
    .attr('x', '20')
    .attr('y', '20')
    .attr('font-size', '20px')
    .attr('fill', 'blue')
    .text("Graph");

vis.selectAll('.line')
    .data(links)
    .enter()
    .append('line')
    .attr('x1', function(d) { return d.source.x; })
    .attr('y1', function(d) { return d.source.y; })
    .attr('x2', function(d) { return d.target.x; })
    .attr('y2', function(d) { return d.target.y; })
    .attr('stroke', 'black');

vis.selectAll('circle .nodes')
    .data(nodes)
    .enter()
    .append('svg:circle')
    .attr('class', 'node')
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; })
    .attr('r', '10px')
    .attr('fill', function(d) { return color(Math.atan2(d.y, d.x)); });

btn = document.getElementById('change');

btn.onclick = function() {
    console.log('click');
    d3.selectAll('circle').transition()
    .duration(750)
    .attr('r', function(d){ return 5+'px'; })
    .attr('cx', function(d){ return 10+'px'; })
    .attr('cy', function(d,i){ return i*10+'px'; });
    return false;
};