# !/usr/bin/sh

#color
RESET=$(tput sgr0)
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
BLUE=$(tput setaf 4)

printf "${BLUE}Gregia Potentia Ultima difficulty selector\n${RESET}"


printf "\n${BLUE}Set Mode:\nN: Normal (default)\nH: Hard (a harder version for the more experienced player)\n"
read MODE

case $MODE in
    N|n|normal|Normal)

    echo "global.mode = 'normal'" > ../kubejs/startup_scripts/difficulty.js

    ;;

    H|h|hard|Hard)

    echo "global.mode = 'hard'" > ../kubejs/startup_scripts/difficulty.js

    ;;

    *)
    printf "\n${RED}Invalid input!${RESET}"
    printf "\n${YELLOW} Accepted Inputs:\n [Normal, normal, N, n]\n [Hard, hard, H, h]\n${RESET}"
    exit 1
    esac
    printf "${GREEN}Done!${RESET}\n"
