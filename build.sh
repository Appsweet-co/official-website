#!/usr/bin/env bash

set -euo pipefail
IFS=$'\n\t'

########

readonly PARENT_DIR="$(dirname ${PWD})"

########

main () {
  npx -y sass --style=compressed --source-map src/styles/index.scss styles.min.css
}

main "${@-}"
