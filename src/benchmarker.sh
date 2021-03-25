echo "Go make yourself a brew; this can take a very long time."
echo "First test:"
python FindingPrimesDesktop.py
echo "Second test:"
python FindingPrimesDesktop1.py
echo "Third test:"
python FindingPrimesDesktop2.py
echo "Fourth test:"
python FindingPrimesDesktop3.py
touch benchmarker.md
echo "Tests done."
zenity --info --text="Finding Primes is done! Return to the terminal for data collection, please!"
echo "What is your computer model?"
read cm
echo "How long did the first test take?"
read one
echo "The second?"
read two
echo "How about the third?"
read thr
echo "And the fourth?"
read fou
echo "##$cm" | cat benchmarker.sh -
echo "- First test: $one seconds" | cat benchmarker.sh -
echo "- Second test: $two seconds" | cat benchmarker.sh -
echo "- Third test: $thr seconds" | cat benchmarker.sh -
echo "- Fourth test: $fou seconds" | cat benchmarker.sh -
