// WiFi Placement Tool
// Throughput in Mbps, by machine -> state ("Off" / "On") -> band.
// Keys must match the option values in your HTML.
// These numbers are PLACEHOLDERS - replace them with your measured results.
const throughput = {
  "Location 1": { // Press
    "On": { "2.4GHz": 331.321, "5GHz": 846.148, "6GHz": 1299.858, "2.4/5GHz": 918.468, "2.4/6GHz": 1484.474, "5/6GHz": 640.022, "2.4/5/6GHz": 827.706 },
    "Off":  { "2.4GHz": 331.84, "5GHz": 883.968, "6GHz": 1490.827, "2.4/5GHz": 845.062, "2.4/6GHz": 1490.827, "5/6GHz": 518.432, "2.4/5/6GHz": 839.971 }
  },
  "Location 2": { // Spray Booth
    "Off": { "2.4GHz": 332.351, "5GHz": 823.385, "6GHz": 1418.59, "2.4/5GHz": 929.792, "2.4/6GHz": 1485.566, "5/6GHz": 649.188, "2.4/5/6GHz": 808.749 },
    "On":  { "2.4GHz": 331.914, "5GHz": 798.43, "6GHz": 1410.902, "2.4/5GHz": 926.331, "2.4/6GHz": 1488.995, "5/6GHz": 714.861, "2.4/5/6GHz": 720.925 }
  },
  "Location 3": { // Beam Saw
    "Off": { "2.4GHz": 330.795, "5GHz": 890.894, "6GHz": 1357.72, "2.4/5GHz": 918.021, "2.4/6GHz": 1553.286, "5/6GHz": 676.763, "2.4/5/6GHz": 794.809 },
    "On":  { "2.4GHz": 329.467, "5GHz": 830.6818, "6GHz": 1402.38, "2.4/5GHz": 927.497, "2.4/6GHz": 1452.836, "5/6GHz": 770.71, "2.4/5/6GHz": 872.876 }
  },
  "Location 4": { // CNC
    "Off": { "2.4GHz": 329.078, "5GHz": 874.404, "6GHz": 1397.141, "2.4/5GHz": 929.994, "2.4/6GHz": 1455.409, "5/6GHz": 733.06, "2.4/5/6GHz": 832.658 },
    "On":  { "2.4GHz": 332.03, "5GHz": 813.467, "6GHz": 1425.467, "2.4/5GHz": 922.815, "2.4/6GHz": 1471.778, "5/6GHz": 743.115, "2.4/5/6GHz": 782.147 }
  },
  "Location 5": { // Panel Saw
    "Off": { "2.4GHz": 332.489, "5GHz": 659.366, "6GHz": 1299.785, "2.4/5GHz": 923.483, "2.4/6GHz": 1485.948, "5/6GHz": 655.116, "2.4/5/6GHz": 861.046 },
    "On":  { "2.4GHz": 306.479, "5GHz": 748.3793, "6GHz": 1252.404, "2.4/5GHz": 929.028,  "2.4/6GHz": 1480.694,  "5/6GHz": 705.996, "2.4/5/6GHz": 891.228 }
  },
  "Location 6": { // CNC 2
    "Off": { "2.4GHz": 328.298, "5GHz": 887.539, "6GHz": 1317.361,  "2.4/5GHz": 920.12, "2.4/6GHz": 1491.791,  "5/6GHz": 673.992, "2.4/5/6GHz": 823.971 },
    "On":  { "2.4GHz": 332.571, "5GHz": 841.9444,  "6GHz": 1366.51,  "2.4/5GHz": 931.113,  "2.4/6GHz": 1433.288,  "5/6GHz": 676.049,  "2.4/5/6GHz": 866.306 }
  },
  "Location 7": { // Planer-Sander
    "Off": { "2.4GHz": 329.294, "5GHz": 740.449,  "6GHz": 1345.754,  "2.4/5GHz": 924.884,  "2.4/6GHz": 1499.511,  "5/6GHz": 668.15,  "2.4/5/6GHz": 877.593 },
    "On":  { "2.4GHz": 333.362, "5GHz": 818.2026,  "6GHz": 1371.513,  "2.4/5GHz": 925.971,  "2.4/6GHz": 1497.74,  "5/6GHz": 825.544,  "2.4/5/6GHz": 861.495 }
  },
  "Location 8": { // Gantry CNC machine
    "Off": { "2.4GHz": 329.555, "5GHz": 782.68,  "6GHz": 1336.224,  "2.4/5GHz": 931.541,  "2.4/6GHz": 1462.694,  "5/6GHz": 647.817,  "2.4/5/6GHz": 860.892 },
    "On":  { "2.4GHz": 332.926, "5GHz": 842.6979,  "6GHz": 1491.419,  "2.4/5GHz": 932.322,  "2.4/6GHz": 1453.728,  "5/6GHz": 871.052,  "2.4/5/6GHz": 881.875 }
  }
};

const machineSelect = document.getElementById("cars");
const stateSelect = document.getElementById("State");
const bandSelect = document.getElementById("Band");
const speedValue = document.getElementById("speed-value");

function update() {
  const speeds = throughput[machineSelect.value] && throughput[machineSelect.value][stateSelect.value];
  const speed = speeds ? speeds[bandSelect.value] : undefined;
  speedValue.textContent = speed !== undefined ? speed : "__";
}

machineSelect.addEventListener("change", update);
stateSelect.addEventListener("change", update);
bandSelect.addEventListener("change", update);
update();