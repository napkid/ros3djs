// module.exports = { output: { libraryTarget: 'var', library: 'ROS3D' }, externals: [ { "./build/ros3d.js", 'var ROS3D' } ] }
module.exports = { output: { libraryTarget: 'var', library: 'ROS3D' }, externals: [ { "./build/ros3d.js", 'var ROS3D' } ], module: {noParse: [/ros3d.js/]} }
