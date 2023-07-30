const fs = require('fs');
const core = require('@actions/core');

async function run() {
  try {
    // Get the Terraform output from the action input
    const tfOutput = core.getInput('tf_output', { required: true });

    // log the output
    console.log(`Terraform output: ${tfOutput}`);

    // Write the content into the hosts.cfg file
    fs.writeFileSync('hosts.cfg', tfOutput);

    console.log('hosts.cfg file has been created successfully.');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
