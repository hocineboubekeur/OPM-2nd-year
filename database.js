const definitionDb = [
    // --- LAB 01: GETTING STARTED ---
    {
        id: "print_basics",
        chap: "lab1",
        chapTitle: "Lab 01: Interactive IO Platform",
        func: "print()",
        desc: "Outputs custom formatted strings, text variables, or calculated mathematical results to the standard terminal output window.",
        example: "print(\"The area of the triangle is:\", S)",
        tags: ["io", "output"],
        difficulty: "beginner"
    },
    {
        id: "triple_quotes",
        chap: "lab1",
        chapTitle: "Lab 01: Interactive IO Platform",
        func: "Triple-Quoted Strings (\"\"\"...\"\"\")",
        desc: "Defines multiline string blocks. Highly useful for displaying structured text (like info cards) without using manual newline '\\n' character escapes.",
        example: "print(\"\"\"\\nPersonal Info\\nName: Houssam\\nAge: 21\\n\"\"\")",
        tags: ["strings", "multiline"],
        difficulty: "beginner"
    },
    {
        id: "input_basics",
        chap: "lab1",
        chapTitle: "Lab 01: Interactive IO Platform",
        func: "input()",
        desc: "Interrupts code execution to wait for user terminal input. Note: Always returns captured input values as a plain text string.",
        example: "name = input(\"Enter a name: \")",
        tags: ["io", "input"],
        difficulty: "beginner"
    },
        // --- NEW: Lab 05b: Exception Handling Basics ---
    {
        id: "python-try-except",
        chap: "lab5b",
        chapTitle: "Lab 05b: Exception Handling Basics",
        func: "try / except",
        desc: `Used to handle runtime errors gracefully. The program attempts to execute the code in the 'try' block, and if a specified error occurs, it catches it and runs the 'except' block instead of crashing.`,
        example: `try:
    result = 9 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")`,
        tags: ["exceptions", "error handling", "try"],
        difficulty: "beginner"
    },
    {
        id: "python-multiple-exceptions",
        chap: "lab5b",
        chapTitle: "Lab 05b: Exception Handling Basics",
        func: "Multiple except blocks",
        desc: `A single 'try' block can be followed by multiple 'except' blocks. This allows the program to handle different types of exceptions (like ValueError or IndexError) in different ways.`,
        example: `try:
    b = int("hello")
except ValueError:
    print("Invalid conversion")
except IndexError:
    print("Invalid index")`,
        tags: ["exceptions", "error handling", "multiple exceptions"],
        difficulty: "beginner"
    },
    {
        id: "python-else-finally",
        chap: "lab5b",
        chapTitle: "Lab 05b: Exception Handling Basics",
        func: "else / finally",
        desc: `Optional blocks in exception handling. The 'else' block runs ONLY if no exception occurred in the 'try' block. The 'finally' block ALWAYS runs at the end, regardless of whether an exception occurred or not.`,
        example: `try:
    result = 10 / 2
except ZeroDivisionError:
    print("Cannot divide by zero")
else:
    print("Division successful!")
finally:
    print("Execution completed")`,
        tags: ["exceptions", "else", "finally"],
        difficulty: "intermediate"
    },
    {
        id: "python-raise",
        chap: "lab5b",
        chapTitle: "Lab 05b: Exception Handling Basics",
        func: "raise",
        desc: `The 'raise' keyword is used to intentionally trigger an exception when a specific condition is met. You can define a custom error message to explain why the error was raised.`,
        example: `if age < 0:
    raise ValueError("Negative age is not allowed")`,
        tags: ["exceptions", "raise", "custom errors"],
        difficulty: "intermediate"
    },
    {
        id: "ex-basic-try-except",
        chap: "lab5b",
        chapTitle: "Lab 05b: Exception Handling Basics",
        func: "Exercise: Basic Try-Except",
        desc: `Write code that attempts to divide two numbers. Handle the case when division by zero occurs.`,
        example: `try:
    result = 9 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")`,
        tags: ["exercise", "try-except"],
        difficulty: "beginner"
    },
    {
        id: "ex-multiple-exceptions",
        chap: "lab5b",
        chapTitle: "Lab 05b: Exception Handling Basics",
        func: "Exercise: Multiple Exception Types",
        desc: `Write code that converts a user input (represented by variable 'a') to an integer, and accesses an element from a list 'e' using that integer as an index. Handle both ValueError (invalid conversion) and IndexError (invalid index).`,
        example: `a = "hello"
e = [1, 2, 3, 4, 5, 6]
try:
    b = int(a)
    c = e[b]
    print(c)
except ValueError:
    print("value error")
except IndexError:
    print("index error")`,
        tags: ["exercise", "multiple exceptions"],
        difficulty: "beginner"
    },
    {
        id: "ex-raising-exceptions",
        chap: "lab5b",
        chapTitle: "Lab 05b: Exception Handling Basics",
        func: "Exercise: Raising Exceptions",
        desc: `Write a function \`validate_age(age)\` that raises a ValueError if age is negative, raises a ValueError if age is greater than 150, and returns True otherwise.`,
        example: `def validate_age(age):
    if age < 0:
        raise ValueError("negative age is not allowed")
    elif age > 150:
        raise ValueError("oldest person alive has 116 years old btw")
    return True`,
        tags: ["exercise", "raise"],
        difficulty: "intermediate"
    },
    {
        id: "float_cast",
        chap: "lab1",
        chapTitle: "Lab 01: Interactive IO Platform",
        func: "float()",
        desc: "Explicitly converts (type-casts) compatible strings or integers into decimal floating-point representation values.",
        example: "decimal_val = float(\"120.5\")\nprint(decimal_val) # Outputs: 120.5",
        tags: ["type casting", "conversion"],
        difficulty: "beginner"
    },
    {
        id: "int_cast",
        chap: "lab1",
        chapTitle: "Lab 01: Interactive IO Platform",
        func: "int()",
        desc: "Explicitly converts floating-point decimals or integer-like strings into clean whole numbers, discarding any decimal fraction.",
        example: "whole_num = int(\"21\")\nprint(whole_num) # Outputs: 21",
        tags: ["type casting", "conversion"],
        difficulty: "beginner"
    },
    {
        id: "str_cast",
        chap: "lab1",
        chapTitle: "Lab 01: Interactive IO Platform",
        func: "str()",
        desc: "Converts numbers or sequence types into their printable string representation for concatenation operations.",
        example: "age_str = str(21)\nprint(\"Age is: \" + age_str)",
        tags: ["type casting", "strings"],
        difficulty: "beginner"
    },
    {
        id: "exponent_op",
        chap: "lab1",
        chapTitle: "Lab 01: Arithmetic Operators Calculus",
        func: "Exponentiation Operator (**)",
        desc: "Raises a numeric base on the left to the power of the exponent on the right.",
        example: "b = 10**6 # Computes 1,000,000\nprint(b)",
        tags: ["operators", "math"],
        difficulty: "beginner"
    },
    {
        id: "floor_div",
        chap: "lab1",
        chapTitle: "Lab 01: Arithmetic Operators Calculus",
        func: "Floor Division (//)",
        desc: "Divides the left operand by the right operand and rounds the result down to the nearest lower integer value.",
        example: "result = 7 // 3 # Evaluates to 2\nprint(result)",
        tags: ["operators", "math"],
        difficulty: "beginner"
    },
    {
        id: "modulo_op",
        chap: "lab1",
        chapTitle: "Lab 01: Arithmetic Operators Calculus",
        func: "Modulo Operator (%)",
        desc: "Divides the left operand by the right operand and returns exclusively the remaining value (remainder).",
        example: "remainder = 7 % 3 # Evaluates to 1\nprint(remainder)",
        tags: ["operators", "math"],
        difficulty: "beginner"
    },
    {
        id: "map_func",
        chap: "lab1",
        chapTitle: "Lab 01: Linear Coordinates Parsing",
        func: "map()",
        desc: "Applies a specified target converter function (like float or int) sequentially to every individual item inside an iterable collection.",
        example: "numbers = list(map(int, ['1', '2', '3']))\nprint(numbers) # Outputs: [1, 2, 3]",
        tags: ["functional", "iteration"],
        difficulty: "intermediate"
    },
    {
        id: "split_method",
        chap: "lab1",
        chapTitle: "Lab 01: Linear Coordinates Parsing",
        func: ".split()",
        desc: "Splits a continuous text string into individual list items based on a designated character separator (delimiter). Default is space.",
        example: "coords = \"1.0,2.0\".split(',')\nprint(coords) # Outputs: ['1.0', '2.0']",
        tags: ["strings", "parsing"],
        difficulty: "beginner"
    },
    {
        id: "tuple_index",
        chap: "lab1",
        chapTitle: "Lab 01: Linear Coordinates Parsing",
        func: "Tuple Indexing",
        desc: "Accesses items inside immutable ordered lists (tuples) using zero-based sequence brackets.",
        example: "a = (3, 4)\nx_coord = a[0] # Yields 3\ny_coord = a[1]",
        tags: ["tuples", "data structures"],
        difficulty: "beginner"
    },

    // --- LAB 02: VARIABLES & DICTIONARIES ---
    {
        id: "type_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: "type(obj)",
        desc: "Returns the explicit structural data type layout of the given object (e.g., str, float, int, list, dict).",
        example: "val = 120.5\nprint(type(val))  # Outputs: <class 'float'>",
        tags: ["introspection", "types"],
        difficulty: "beginner"
    },
    {
        id: "float_func_l2",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: "float(x)",
        desc: "Converts/type-casts a compatible value (like a numeric string or an integer) into a floating-point decimal number.",
        example: "base_val = float(\"100\")\nprint(base_val)  # Outputs: 100.0",
        tags: ["type casting", "conversion"],
        difficulty: "beginner"
    },
    {
        id: "len_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: "len(obj)",
        desc: "Returns the total item count or sequence length of an object like a string, list, or dictionary mapping.",
        example: "stations = [\"ALG\", \"ORA\", \"CON\"]\nprint(len(stations))  # Outputs: 3",
        tags: ["built-in", "collections"],
        difficulty: "beginner"
    },
    {
        id: "list_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: "list(obj)",
        desc: "Converts an iterable collection or sequence object (like a string, tuple, or set) into a standard indexable mutable list.",
        example: "coords_tuple = (3, 4)\nprint(list(coords_tuple))  # Outputs: [3, 4]",
        tags: ["type casting", "lists"],
        difficulty: "beginner"
    },
    {
        id: "set_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: "set(iterable)",
        desc: "Transforms a collection into a mathematical set containing only unique elements, automatically filtering duplicates.",
        example: "raw_data = [1, 2, 2, 3]\nprint(set(raw_data))  # Outputs: {1, 2, 3}",
        tags: ["type casting", "sets"],
        difficulty: "beginner"
    },
    {
        id: "math_sin",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: "math.sin(x)",
        desc: "Calculates the mathematical trigonometric sine of x. Requires executing an 'import math' declaration first; input x must be in radians.",
        example: "import math\nprint(math.sin(math.pi / 2))  # Outputs: 1.0",
        tags: ["math", "trigonometry"],
        difficulty: "intermediate"
    },
    {
        id: "lower_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".lower()",
        desc: "Converts all uppercase alphabet characters within a target string into their lowercase equivalents.",
        example: "city = \"ALGER\"\nprint(city.lower())  # Outputs: alger",
        tags: ["strings", "case"],
        difficulty: "beginner"
    },
    {
        id: "upper_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".upper()",
        desc: "Converts all lowercase alphabet characters within a target string into their uppercase equivalents.",
        example: "region = \"sahara\"\nprint(region.upper())  # Outputs: SAHARA",
        tags: ["strings", "case"],
        difficulty: "beginner"
    },
    {
        id: "split_func_l2",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".split(separator)",
        desc: "Breaks a string into a list of smaller substrings based on a specific separator delimiter pattern.",
        example: "line = \"ALG,ORA,CON\"\nprint(line.split(\",\"))  # ['ALG', 'ORA', 'CON']",
        tags: ["strings", "parsing"],
        difficulty: "beginner"
    },
    {
        id: "insert_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".insert(index, element)",
        desc: "Inserts a new element at a specific index position in a list, shifting all subsequent elements down to the right.",
        example: "nums = [10, 30]\nnums.insert(1, 20)\nprint(nums)  # [10, 20, 30]",
        tags: ["lists", "mutation"],
        difficulty: "beginner"
    },
    {
        id: "append_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".append(element)",
        desc: "Appends a new target item or variable entry directly to the absolute end of the target list sequence inline.",
        example: "stack = [1, 2]\nstack.append(3)\nprint(stack)  # [1, 2, 3]",
        tags: ["lists", "mutation"],
        difficulty: "beginner"
    },
    {
        id: "sort_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".sort()",
        desc: "Permanently sorts items inside a mutable list into ascending order (numerical or alphabetical) inline.",
        example: "un = [3, 1, 2]\nun.sort()\nprint(un)  # [1, 2, 3]",
        tags: ["lists", "sorting"],
        difficulty: "beginner"
    },
    {
        id: "union_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".union(other_set)",
        desc: "Combines items, returning a new set containing all unique elements aggregated from both intersecting sets.",
        example: "print({1, 2}.union({2, 3}))  # Outputs: {1, 2, 3}",
        tags: ["sets", "operations"],
        difficulty: "intermediate"
    },
    {
        id: "intersection_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".intersection(other_set)",
        desc: "Returns a new set filtering and keeping exclusively elements that exist concurrently inside both source sets.",
        example: "print({1, 2}.intersection({2, 3}))  # Outputs: {2}",
        tags: ["sets", "operations"],
        difficulty: "intermediate"
    },
    {
        id: "difference_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".difference(other_set)",
        desc: "Isolates contents, returning a fresh set with elements present in the first set but completely absent from the second set.",
        example: "print({1, 2}.difference({2, 3}))  # Outputs: {1}",
        tags: ["sets", "operations"],
        difficulty: "intermediate"
    },
    {
        id: "keys_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".keys()",
        desc: "Returns a dynamic view iterable object containing all structural keys present in a target mapping dictionary.",
        example: "client = {\"name\": \"Hocine\", \"age\": 21}\nprint(client.keys())",
        tags: ["dictionaries", "keys"],
        difficulty: "beginner"
    },
    {
        id: "update_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".update({key: value})",
        desc: "Adds new key-value elements directly to a dictionary, or overwrites existing data records if matching keys are found.",
        example: "Adic = {\"name\": \"Alice\"}\nAdic.update({\"major\": \"Engineering\", \"age\": 22})",
        tags: ["dictionaries", "mutation"],
        difficulty: "beginner"
    },
    {
        id: "get_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".get(key)",
        desc: "Retrieves mapped values safely. If a requested key is absent, it securely falls back to returning a default parameter instead of a KeyError crash.",
        example: "Adic = {\"name\": \"Alice\"}\nprint(Adic.get(\"gpa\", \"Not available\"))",
        tags: ["dictionaries", "safe access"],
        difficulty: "beginner"
    },
    {
        id: "whos_magic",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: "%whos",
        desc: "Jupyter Notebook shell utility command. Displays an organized summary table layout of all active computational variables assigned in memory.",
        example: "# Run in a Jupyter Notebook code cell:\n%whos",
        tags: ["jupyter", "debugging"],
        difficulty: "beginner"
    },
    {
        id: "reset_magic",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: "%reset",
        desc: "Clears the entire active variable registry from the interactive kernel environment's global memory footprint to reset execution spaces.",
        example: "# Run in a Jupyter Notebook cell to clear memory:\n%reset -f",
        tags: ["jupyter", "debugging"],
        difficulty: "beginner"
    },

    // --- LAB 03: ITERATIONS & CONTROL FLOWS ---
    {
        id: "conditional_branching",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "if / elif / else",
        desc: "Executes targeted code blocks conditionally by evaluating sequential boolean logical evaluations.",
        example: "if score >= 90:\n    grade = 'A'\nelif score >= 75:\n    grade = 'B'\nelse:\n    grade = 'F'",
        tags: ["control flow", "conditionals"],
        difficulty: "beginner"
    },
    {
        id: "range_func_l3",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "range(start, stop, step)",
        desc: "Generates an immutable arithmetic sequence of integers up to (but not including) the stop limit. Heavily optimized to run counted loops.",
        example: "for i in range(1, 10, 2):\n    print(i)  # Outputs: 1, 3, 5, 7, 9",
        tags: ["loops", "iteration"],
        difficulty: "beginner"
    },
    {
        id: "enumerate_func_l3",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "enumerate(iterable)",
        desc: "Attaches an index counter tracker to an iterable sequence object and returns synced pairs of (index, value) loops.",
        example: "words = ['rescue', 'food']\nfor idx, val in enumerate(words):\n    print(idx, val)",
        tags: ["loops", "iteration"],
        difficulty: "intermediate"
    },
    {
        id: "zip_func_l3",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "zip(iterable1, iterable2)",
        desc: "Pairs up elements from two or more iterables simultaneously, combining matching index positions into clear tuples.",
        example: "names = ['Houssam', 'Manar']\nscores = [95, 98]\nfor n, s in zip(names, scores):\n    print(n, s)",
        tags: ["loops", "iteration"],
        difficulty: "intermediate"
    },
    {
        id: "sorted_func",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "sorted(iterable, key=...)",
        desc: "Returns a completely new sorted list from the elements of any iterable sequence. The optional key parameter lets you map custom criteria mapping filters (like len).",
        example: "words = ['apple', 'go', 'banana']\nprint(sorted(words, key=len))  # Sorts words by character count",
        tags: ["sorting", "functional"],
        difficulty: "intermediate"
    },
    {
        id: "max_func",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "max(iterable)",
        desc: "Returns the absolute largest computed item value present within an iterable dataset stream or multiple explicit inline arguments.",
        example: "print(max([14, 89, 52]))  # Outputs: 89",
        tags: ["built-in", "aggregation"],
        difficulty: "beginner"
    },
    {
        id: "abs_func",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "abs(x)",
        desc: "Returns the absolute positive magnitude value of a numeric coordinate. Essential to compute convergence error distance inside the Bisection algorithm loop.",
        example: "error_val = abs(-0.0045)\nprint(error_val)  # Outputs: 0.0045",
        tags: ["math", "built-in"],
        difficulty: "beginner"
    },
    {
        id: "sum_func",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "sum(iterable)",
        desc: "Calculates the arithmetic running total accumulation by adding up all numeric items structured inside an iterable sequence collection.",
        example: "total_weight = sum([1.2, 3.4, 5.6])\nprint(total_weight)",
        tags: ["built-in", "aggregation"],
        difficulty: "beginner"
    },
    {
        id: "map_func_l3",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "map(func, iterable)",
        desc: "Passes each sequential component of an iterable structure through a specified transformer conversion function to map results.",
        example: "squared = list(map(lambda x: x**2, [1, 2, 3]))\nprint(squared)  # Outputs: [1, 4, 9]",
        tags: ["functional", "iteration"],
        difficulty: "intermediate"
    },
    {
        id: "filter_func",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "filter(func, iterable)",
        desc: "Sifts elements out of an iterable layout sequence by validating items against a true/false conditional validation query execution.",
        example: "evens = list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4]))\nprint(evens)  # Outputs: [2, 4]",
        tags: ["functional", "filtering"],
        difficulty: "intermediate"
    },
    {
        id: "next_func",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "next(iterator)",
        desc: "Advances and queries the immediate subsequent execution context value item out of an active pointer iterator or custom generator workspace.",
        example: "my_iter = iter([10, 20])\nprint(next(my_iter))  # Outputs: 10",
        tags: ["iteration", "generators"],
        difficulty: "intermediate"
    },
    {
        id: "ord_func",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "ord(char)",
        desc: "Converts a single target text character symbol into its corresponding numerical integer representation value under Unicode/ASCII maps.",
        example: "print(ord('A'))  # Outputs: 65",
        tags: ["strings", "encoding"],
        difficulty: "beginner"
    },
    {
        id: "chr_func",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "chr(int)",
        desc: "Decodes a structural numeric coordinate integer system token back into its respective alphanumeric ASCII/Unicode text string layout.",
        example: "print(chr(65))  # Outputs: 'A'",
        tags: ["strings", "encoding"],
        difficulty: "beginner"
    },
    {
        id: "isalpha_method",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: ".isalpha()",
        desc: "Validates string composition. Yields true if every individual character inside the string is a valid alphabetical letter (a-z, A-Z).",
        example: "word = 'Algiers'\nprint(word.isalpha())  # Outputs: True",
        tags: ["strings", "validation"],
        difficulty: "beginner"
    },
    {
        id: "isalpha_method_upper",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: ".isupper()",
        desc: "Validates string transformation casing. Evaluates to True if all alphabetical letters present inside the string are capitalized uppercase.",
        example: "code = 'WAFIR'\nprint(code.isupper())  # Outputs: True",
        tags: ["strings", "case"],
        difficulty: "beginner"
    },
    {
        id: "items_method",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: ".items()",
        desc: "Returns a dynamic view sequence of (key, value) dictionary tuples. Extensively utilized inside structural text frequency parsing routines.",
        example: "counts = {'the': 5, 'lab': 2}\nfor word, count in counts.items():\n    print(word, count)",
        tags: ["dictionaries", "iteration"],
        difficulty: "beginner"
    },
    {
        id: "math_ceil",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "math.ceil(x)",
        desc: "Rounds any floating decimal scalar upward to the absolute nearest integer boundary value. Used to compute theoretical verification bounds.",
        example: "import math\nprint(math.ceil(4.1))  # Outputs: 5",
        tags: ["math", "rounding"],
        difficulty: "intermediate"
    },
    {
        id: "np_log2",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "np.log2(x)",
        desc: "Computes the vectorized binary logarithm (base-2) over single data variables or comprehensive multi-dimensional array coordinates using NumPy.",
        example: "import numpy as np\nprint(np.log2(8.0))  # Outputs: 3.0",
        tags: ["numpy", "math"],
        difficulty: "intermediate"
    },
    {
        id: "np_cos",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "np.cos(x)",
        desc: "Evaluates the mathematical trigonometric cosine sequence properties element-wise across arrays or scalar indices using NumPy namespaces.",
        example: "import numpy as np\nprint(np.cos(0.0))  # Outputs: 1.0",
        tags: ["numpy", "trigonometry"],
        difficulty: "intermediate"
    },
    {
        id: "plt_semilogy",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "plt.semilogy()",
        desc: "Configures linear-log plot interfaces transforming the y-axis to a logarithmic base scale while preserving a linear format across x-axis components.",
        example: "import matplotlib.pyplot as plt\n# plt.semilogy(epochs, error_margins)  # Used to analyze linear convergence",
        tags: ["matplotlib", "plotting"],
        difficulty: "advanced"
    },
    {
        id: "lambda_keyword",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "lambda parameters: expression",
        desc: "Instantiates concise anonymous single-expression helper functions inline without needing formal functional definitions.",
        example: "f = lambda x: x**3 - 1\nprint(f(2))  # Outputs: 7",
        tags: ["functional", "anonymous functions"],
        difficulty: "intermediate"
    },
    {
        id: "yield_keyword",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "yield value",
        desc: "Suspends function runtime execution states to yield incremental stream tokens lazily, transforming basic routines into stateful Generators.",
        example: "def counter():\n    yield 1\n    yield 2\n# Pauses execution context data safely for iterative processing",
        tags: ["generators", "functional"],
        difficulty: "advanced"
    },

    // --- LAB 04: NUMPY ROUTINES & LINEAR ALGEBRA ---
    {
        id: "np_arange",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.arange(start, stop, step)",
        desc: "Returns an array containing evenly spaced values within a designated numeric interval, generated sequentially down to (but excluding) the stop threshold.",
        example: "import numpy as np\narr = np.arange(0, 10, 2)\nprint(arr)  # Outputs: [0 2 4 6 8]",
        tags: ["numpy", "array creation"],
        difficulty: "beginner"
    },
    {
        id: "np_linspace",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.linspace(start, stop, num)",
        desc: "Generates an array with exactly 'num' evenly spaced values calculated systematically across a specified range interval inclusive of both bounds.",
        example: "import numpy as np\nx_vals = np.linspace(-2, 2, 5)\nprint(x_vals)  # Outputs: [-2. -1.  0.  1.  2.]",
        tags: ["numpy", "array creation"],
        difficulty: "beginner"
    },
    {
        id: "np_logspace",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.logspace(start, stop, num)",
        desc: "Returns evenly spaced numeric values mapped logarithmically between base exponents (default base is 10). Useful for tracking geometric step bounds.",
        example: "import numpy as np\ndecades = np.logspace(0, 3, 4)\nprint(decades)  # Outputs: [1. 10. 100. 1000.]",
        tags: ["numpy", "array creation"],
        difficulty: "intermediate"
    },
    {
        id: "np_zeros_ones",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.zeros() / np.ones()",
        desc: "Pre-allocates clear multidimensional ndarrays filled entirely with 0s or 1s according to a specified coordinate dimensions shape tuple.",
        example: "import numpy as np\nmatrix_z = np.zeros((2, 3))\nmatrix_o = np.ones((3, 1))",
        tags: ["numpy", "array creation"],
        difficulty: "beginner"
    },
    {
        id: "np_full",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.full(shape, fill_value)",
        desc: "Initializes a multi-dimensional array matching a specified target shape layout filled entirely with a designated constant numeric value.",
        example: "import numpy as np\nconst_mat = np.full((2, 2), 7.5)\nprint(const_mat)",
        tags: ["numpy", "array creation"],
        difficulty: "beginner"
    },
    {
        id: "np_full_like",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.full_like(a, fill_value)",
        desc: "Creates a new constant-filled array matching the exact structural dimensions shape and internal variable data type of an already existing array reference 'a'.",
        example: "import numpy as np\nbase = np.array([[1, 2], [3, 4]])\nmatched = np.full_like(base, -1)\nprint(matched)",
        tags: ["numpy", "array creation"],
        difficulty: "intermediate"
    },
    {
        id: "np_eye_identity",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.eye(N) / np.identity(N)",
        desc: "Constructs a clean 2D identity square matrix of dimension N x N, populated with 1s along the main diagonal and 0s everywhere else.",
        example: "import numpy as np\nid_matrix = np.eye(3)\nprint(id_matrix)",
        tags: ["numpy", "linear algebra"],
        difficulty: "beginner"
    },
    {
        id: "np_diagflat",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.diagflat(list)",
        desc: "Flattens an input list or sequence data array and maps its items directly along the main diagonal of a newly constructed 2D array workspace.",
        example: "import numpy as np\ndiag_mat = np.diagflat([5, 10, 15])\nprint(diag_mat)",
        tags: ["numpy", "matrix"],
        difficulty: "intermediate"
    },
    {
        id: "np_tri_triu_tril",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.tri() / np.tril() / np.triu()",
        desc: "Generates or isolates triangular matrix slices. tri() sets 1s at or below a diagonal; tril() pulls a lower triangle; triu() extracts an upper triangle.",
        example: "import numpy as np\nmat = np.array([[1,2,3],[4,5,6],[7,8,9]])\nprint(np.tril(mat))  # Zeros out elements above main diagonal",
        tags: ["numpy", "matrix"],
        difficulty: "intermediate"
    },
    {
        id: "np_asarray_asmatrix",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.asarray() / np.asmatrix()",
        desc: "Converts plain Python raw sequence lists or tuples into memory-efficient NumPy ndarray or matrix reference objects without copying data if possible.",
        example: "import numpy as np\nraw_list = [10, 20, 30]\narr = np.asarray(raw_list)\nprint(type(arr))  # Outputs: <class 'numpy.ndarray'>",
        tags: ["numpy", "conversion"],
        difficulty: "beginner"
    },
    {
        id: "np_reshape_l4",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: ".reshape(shape)",
        desc: "Reorganizes an array into a different dimensional coordinate layout without updating underlying raw memory buffers. Using -1 lets NumPy compute that axis size.",
        example: "import numpy as np\nflat = np.arange(6)\nmatrix_2d = flat.reshape(2, 3)  # Transformed into 2 rows, 3 columns",
        tags: ["numpy", "array manipulation"],
        difficulty: "intermediate"
    },
    {
        id: "np_flatten",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: ".flatten()",
        desc: "Collapses a multi-dimensional array layer structure downward into a clean, simple 1D array layout copy.",
        example: "import numpy as np\nmat = np.array([[1, 2], [3, 4]])\nprint(mat.flatten())  # Outputs: [1 2 3 4]",
        tags: ["numpy", "array manipulation"],
        difficulty: "beginner"
    },
    {
        id: "np_squeeze",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.squeeze(arr)",
        desc: "Scans array layouts and compresses away empty single-dimensional axes (axes where the length size equals 1) out of array shape dimensions.",
        example: "import numpy as np\nstretched = np.array([[[1], [2]]])  # Shape is (1, 2, 1)\nprint(np.squeeze(stretched).shape)  # Compressed shape drops to (2,)",
        tags: ["numpy", "array manipulation"],
        difficulty: "intermediate"
    },
    {
        id: "np_transpose_l4",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.transpose() / .T",
        desc: "Swaps axes columns and row coordinates across a target matrix layout. Instantly returns the algebraic transpose matrix representation.",
        example: "import numpy as np\nA = np.array([[1, 2], [3, 4]])\nprint(A.T)  # Matrix entries swap positions across the diagonal",
        tags: ["numpy", "linear algebra"],
        difficulty: "intermediate"
    },
    {
        id: "np_stacks",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.vstack() / np.hstack() / np.row_stack()",
        desc: "Glues sub-arrays together in blocks. vstack and row_stack slice rows vertically downwards; hstack stacks sequence elements horizontally column-wise.",
        example: "import numpy as np\na = np.array([1, 2])\nb = np.array([3, 4])\nprint(np.vstack((a, b)))  # Combines into a 2x2 matrix stacked vertically",
        tags: ["numpy", "array manipulation"],
        difficulty: "intermediate"
    },
    {
        id: "np_copy_l4",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: ".copy()",
        desc: "Allocates independent space to create a deep duplicate of an array. Changes to the copy won't overwrite the original array values.",
        example: "import numpy as np\nA_orig = np.array([1, 2, 3])\nA_safe = A_orig.copy()\nA_safe[0] = 99  # A_orig remains unaffected",
        tags: ["numpy", "memory"],
        difficulty: "beginner"
    },
    {
        id: "np_sum_axis",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.sum(arr, axis)",
        desc: "Sums elements. Setting axis=0 aggregates data downwards collapsing across rows (column totals); axis=1 collapses elements sideways across columns (row totals).",
        example: "import numpy as np\nM = np.array([[1, 2], [3, 4]])\nprint(np.sum(M, axis=0))  # Column totals. Outputs: [4 6]",
        tags: ["numpy", "reduction"],
        difficulty: "intermediate"
    },
    {
        id: "np_trace",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.trace(arr)",
        desc: "Calculates the matrix trace by identifying and adding up all individual numeric elements located along the primary main diagonal line.",
        example: "import numpy as np\nM = np.array([[1, 2], [3, 4]])\nprint(np.trace(M))  # 1 + 4. Outputs: 5",
        tags: ["numpy", "linear algebra"],
        difficulty: "intermediate"
    },
    {
        id: "np_linalg_norm",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.linalg.norm(arr)",
        desc: "Computes the algebraic vector length or matrix norm (such as the entry-wise Frobenius norm or Euclidean distance metric).",
        example: "import numpy as np\nvec = np.array([3, 4])\nprint(np.linalg.norm(vec))  # Euclidean length. Outputs: 5.0",
        tags: ["numpy", "linear algebra"],
        difficulty: "intermediate"
    },
    {
        id: "np_linalg_inv_l4",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.linalg.inv(arr)",
        desc: "Calculates the multiplicative inverse of a square, non-singular linear matrix. Essential for computing analytical solutions.",
        example: "import numpy as np\nA = np.array([[2, 1], [1, 2]])\nprint(np.linalg.inv(A))",
        tags: ["numpy", "linear algebra"],
        difficulty: "advanced"
    },
    {
        id: "np_dot_operator",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.dot() / @ operator",
        desc: "Performs matrix-matrix or matrix-vector dot product multiplication operations according to the rules of linear algebra.",
        example: "import numpy as np\nA = np.array([[1, 2], [3, 4]])\nx = np.array([1, 1])\nprint(A @ x)  # True row-column multiplication output",
        tags: ["numpy", "linear algebra"],
        difficulty: "intermediate"
    },
    {
        id: "np_linalg_det",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.linalg.det(arr)",
        desc: "Computes the scalar determinant value of a square matrix to test system singularity or linear dependence characteristics.",
        example: "import numpy as np\nA = np.array([[1, 2], [3, 4]])\nprint(np.linalg.det(A))  # Outputs: -2.0",
        tags: ["numpy", "linear algebra"],
        difficulty: "advanced"
    },
    {
        id: "np_linalg_eig",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.linalg.eig(arr)",
        desc: "Computes and returns a paired tuple containing the scalar eigenvalues list and the corresponding normalized eigenvectors matrix layout.",
        example: "import numpy as np\nA = np.array([[1, 0], [0, 2]])\neigenvalues, eigenvectors = np.linalg.eig(A)",
        tags: ["numpy", "linear algebra"],
        difficulty: "advanced"
    },
    {
        id: "np_linalg_solve_l4",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.linalg.solve(A, b)",
        desc: "Solves an exact system of linear algebraic equations structured in the vector matrix format Ax = b, running faster than a direct manual matrix inversion.",
        example: "import numpy as np\nA = np.array([[3, 1], [1, 2]])\nb = np.array([9, 8])\nx = np.linalg.solve(A, b)\nprint(x)  # Vector solution elements",
        tags: ["numpy", "linear algebra"],
        difficulty: "advanced"
    },
    {
        id: "np_random_rand",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.random.rand()",
        desc: "Generates uniformly distributed random float numbers inside the standard continuous open interval [0.0, 1.0).",
        example: "import numpy as np\nrand_vals = np.random.rand(3, 3)  # Produces a 3x3 uniform random block",
        tags: ["numpy", "random"],
        difficulty: "beginner"
    },
    {
        id: "np_random_randn",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.random.randn()",
        desc: "Generates sample numbers derived directly from a standard normal distribution (Gaussian bell curve centered at mean=0, std=1).",
        example: "import numpy as np\ngaussian_noise = np.random.randn(100)",
        tags: ["numpy", "random"],
        difficulty: "beginner"
    },
    {
        id: "help_utility",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "help(func)",
        desc: "Python's built-in interactive console help engine tool. Queries and returns the formal text documentation and input requirements of a function.",
        example: "import numpy as np\n# help(np.linspace)  # Prints detailed parameter manual instructions",
        tags: ["debugging", "documentation"],
        difficulty: "beginner"
    },
    {
        id: "isinstance_utility",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "isinstance(obj, type)",
        desc: "Performs validation checking. Evaluates to True if a targeted data instance variable matches a specified structural class or type blueprint.",
        example: "import numpy as np\nA = np.array([1, 2])\nprint(isinstance(A, np.ndarray))  # Outputs: True",
        tags: ["introspection", "types"],
        difficulty: "beginner"
    },


        // --- MORE: LabWork NumPy — Wind Statistics in Algeria (continuation) ---
    {
        id: "np-boolean-mask",
        chap: "numpy-wind",
        chapTitle: "LabWork NumPy — Wind Statistics in Algeria",
        func: "Boolean Masks",
        desc: `Filters rows or elements using conditional logic. Use bitwise operators \`&\` (AND) and \`|\` (OR) to combine conditions, enclosed in parentheses.`,
        example: `summer_mask = (dates[:, 1] >= 6) & (dates[:, 1] <= 9)
summer_speeds = speeds[summer_mask]`,
        tags: ["numpy", "filtering", "boolean logic"],
        difficulty: "intermediate"
    },
    {
        id: "np-unique",
        chap: "numpy-wind",
        chapTitle: "LabWork NumPy — Wind Statistics in Algeria",
        func: "np.unique()",
        desc: `Finds the unique elements of an array. If \`return_counts=True\` is passed, it also returns the frequency of each unique value.`,
        example: `unique_idx, counts = np.unique(windiest_each_day, return_counts=True)`,
        tags: ["numpy", "unique", "counting"],
        difficulty: "intermediate"
    },
    {
        id: "np-reshape",
        chap: "numpy-wind",
        chapTitle: "LabWork NumPy — Wind Statistics in Algeria",
        func: "arr.reshape()",
        desc: `Gives a new shape to an array without changing its data. Useful for converting 1D/2D arrays into 3D chunks (e.g., grouping daily data into weeks).`,
        example: `weekly = first_year.reshape(52, 7, 12) # 52 weeks, 7 days, 12 stations`,
        tags: ["numpy", "reshape", "dimensions"],
        difficulty: "advanced"
    },
    {
        id: "ex-numpy-load",
        chap: "numpy-wind",
        chapTitle: "LabWork NumPy — Wind Statistics in Algeria",
        func: "Exercise: Loading and Exploring the Dataset",
        desc: `Load the file \`algeria_wind.data\` into a NumPy array. Separate it into two arrays: \`dates\` (first 3 columns) and \`speeds\` (remaining 12 columns).`,
        example: `import numpy as np

wind_data = np.loadtxt('algeria_wind.data')
dates = wind_data[:, :3]
speeds = wind_data[:, 3:]
print(dates.shape, speeds.shape)`,
        tags: ["exercise", "io", "slicing"],
        difficulty: "beginner"
    },
    {
        id: "ex-numpy-global-stats",
        chap: "numpy-wind",
        chapTitle: "LabWork NumPy — Wind Statistics in Algeria",
        func: "Exercise: Global Summary Statistics",
        desc: `Using only the \`speeds\` array, compute a single scalar for the global minimum, maximum, mean, and standard deviation over the entire 18‑year period.`,
        example: `global_min = speeds.min()
global_max = speeds.max()
global_mean = speeds.mean()
global_std = speeds.std()`,
        tags: ["exercise", "aggregation", "statistics"],
        difficulty: "beginner"
    },
    {
        id: "ex-numpy-stats-per-station",
        chap: "numpy-wind",
        chapTitle: "LabWork NumPy — Wind Statistics in Algeria",
        func: "Exercise: Statistics per Station (Column-wise)",
        desc: `Compute the minimum, maximum, mean, and standard deviation separately for each of the 12 stations. Ensure you collapse the correct axis.`,
        example: `min_per_station = speeds.min(axis=0)
max_per_station = speeds.max(axis=0)
mean_per_station = speeds.mean(axis=0)
std_per_station = speeds.std(axis=0)`,
        tags: ["exercise", "axis", "aggregation"],
        difficulty: "intermediate"
    },
    {
        id: "ex-numpy-stats-per-day",
        chap: "numpy-wind",
        chapTitle: "LabWork NumPy — Wind Statistics in Algeria",
        func: "Exercise: Statistics per Day (Row-wise)",
        desc: `Compute the aggregation statistics across all 12 stations for each individual day. Your resulting arrays should have a length of 6574.`,
        example: `min_per_day = speeds.min(axis=1)
max_per_day = speeds.max(axis=1)
mean_per_day = speeds.mean(axis=1)
std_per_day = speeds.std(axis=1)`,
        tags: ["exercise", "axis", "aggregation"],
        difficulty: "intermediate"
    },
    {
        id: "ex-numpy-windiest-station",
        chap: "numpy-wind",
        chapTitle: "LabWork NumPy — Wind Statistics in Algeria",
        func: "Exercise: Windiest Station per Day",
        desc: `Find the column index of the station that recorded the highest wind speed for each of the 6574 days.`,
        example: `windiest_each_day = np.argmax(speeds, axis=1)`,
        tags: ["exercise", "argmax"],
        difficulty: "intermediate"
    },
    {
        id: "ex-numpy-record-date",
        chap: "numpy-wind",
        chapTitle: "LabWork NumPy — Wind Statistics in Algeria",
        func: "Exercise: Date of the National Wind Speed Record",
        desc: `Find the single highest wind speed in the entire dataset, its flat position, and convert it to a row and column index to look up the exact date and station.`,
        example: `record_speed = speeds.max()
record_row, record_col = np.unravel_index(speeds.argmax(), speeds.shape)
record_date = dates[record_row]`,
        tags: ["exercise", "unravel_index", "search"],
        difficulty: "advanced"
    },
    {
        id: "ex-numpy-boolean-mask",
        chap: "numpy-wind",
        chapTitle: "LabWork NumPy — Wind Statistics in Algeria",
        func: "Exercise: Mean Summer Wind Speed",
        desc: `Build a boolean mask to filter rows corresponding to summer months (months 6, 7, 8, 9). Then, extract these rows and calculate the mean summer wind speed for each station.`,
        example: `summer_mask = (dates[:, 1] >= 6) & (dates[:, 1] <= 9)
summer_speeds = speeds[summer_mask]
summer_mean = summer_speeds.mean(axis=0)`,
        tags: ["exercise", "boolean mask", "filtering"],
        difficulty: "intermediate"
    },
    {
        id: "ex-numpy-weekly-reshape",
        chap: "numpy-wind",
        chapTitle: "LabWork NumPy — Wind Statistics in Algeria",
        func: "Bonus Exercise: Weekly Statistics (No Loop)",
        desc: `Compute the national mean wind speed for each of the first 52 weeks. Take the first 364 days, reshape the array to (52 weeks, 7 days, 12 stations), and collapse both the day and station axes.`,
        example: `first_year = speeds[:364]
weekly = first_year.reshape(52, 7, 12)
weekly_mean = weekly.mean(axis=(1, 2))`,
        tags: ["exercise", "reshape", "advanced"],
        difficulty: "advanced"
    },
        // --- NEW: Lab 05: Matplotlib ---
    {
        id: "plt-plot",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "plt.plot()",
        desc: `Used to create basic line plots. You can customize line styles (e.g., '-', '--', '-.'), markers (e.g., 'o', '^', 's'), colors, line width (lw), and marker size (ms).`,
        example: `plt.plot(x, y, 'o--', color='purple', lw=2, ms=10)
plt.show()`,
        tags: ["plotting", "line", "markers"],
        difficulty: "beginner"
    },
    {
        id: "plt-figure",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "plt.figure()",
        desc: `Creates a new figure or canvas. Commonly used to specify the dimensions of the plot using the figsize=(width, height) parameter.`,
        example: `plt.figure(figsize=(10, 4))
plt.plot(x, y)
plt.show()`,
        tags: ["figure", "size"],
        difficulty: "beginner"
    },
    {
        id: "plt-labels-titles",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "plt.xlabel(), plt.ylabel(), plt.title()",
        desc: `Adds text labels to the X and Y axes, and a main title to the plot. You can control the font size using the fontsize parameter.`,
        example: `plt.xlabel('X Axis', fontsize=14)
plt.ylabel('Y Axis', fontsize=14)
plt.title('sin(x) Approximation', fontsize=16)`,
        tags: ["labels", "titles", "text"],
        difficulty: "beginner"
    },
    {
        id: "plt-legend",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "plt.legend()",
        desc: `Displays a legend based on the 'label' argument provided in plotting functions. The location can be set using the 'loc' parameter (e.g., 'upper right', 'lower left', or numerical codes like 0 for Best, 1 for Upper right).`,
        example: `plt.plot(x, y, label='Data with noise')
plt.legend(loc='upper right', fontsize=12)`,
        tags: ["legend", "labels"],
        difficulty: "beginner"
    },
    {
        id: "plt-subplot",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "plt.subplot()",
        desc: `Creates multiple plots in the same figure. It takes a 3-digit integer parameter representing rows, columns, and index (e.g., 131 means 1 row, 3 columns, plot 1).`,
        example: `plt.subplot(131)
plt.bar(names, values)
plt.title('Bar Chart')`,
        tags: ["subplots", "multiple plots"],
        difficulty: "intermediate"
    },
    {
        id: "plt-categorical",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "plt.bar(), plt.scatter()",
        desc: `Functions for plotting categorical variables. plt.bar() creates bar charts, while plt.scatter() generates scatter plots.`,
        example: `plt.bar(['Group A', 'Group B'], [1, 10])
plt.scatter(x, y, alpha=0.5)`,
        tags: ["categorical", "bar", "scatter"],
        difficulty: "beginner"
    },
    {
        id: "plt-axis-limits",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "plt.ylim(), plt.xlim()",
        desc: `Sets the limits of the y-axis or x-axis. You can specify top/bottom or left/right limits respectively.`,
        example: `plt.ylim(top=2)`,
        tags: ["axis limits", "scaling"],
        difficulty: "beginner"
    },
    {
        id: "plt-hist",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "plt.hist()",
        desc: `Creates a histogram from a distribution of data. It can be customized with a specific number of 'bins', converted to a probability density using 'density=True', and styled using 'histtype'.`,
        example: `plt.hist(res, bins=30, density=True, histtype='step', label='Dist 1')`,
        tags: ["histogram", "statistics", "bins"],
        difficulty: "intermediate"
    },
    {
        id: "plt-advanced-api",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "plt.subplots() (Object-Oriented API)",
        desc: `The object-oriented API uses plt.subplots() to return a 'figure' (the whole canvas) and 'axes' (the individual plot areas). It is cleaner for complex multi-plot figures.`,
        example: `fig, axes = plt.subplots(2, 2, figsize=(10, 8))
axes[0, 0].plot(x, y, 'o--')
axes[0, 0].set_title('Line Plot')`,
        tags: ["object-oriented", "axes", "figure"],
        difficulty: "advanced"
    },
    {
        id: "ax-methods",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "ax.set_xlabel(), ax.set_title(), ax.text()",
        desc: `The equivalent object-oriented methods to configure specific subplot axes. ax.text() places text at specific coordinates, often utilizing transform=ax.transAxes for relative positioning.`,
        example: `ax.set_xlabel('Time [s]')
ax.set_title('Advanced API')
ax.text(0.1, 0.2, 'Annotation', transform=ax.transAxes)`,
        tags: ["axes methods", "text annotation"],
        difficulty: "advanced"
    },
    {
        id: "plt-layout-save",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "fig.tight_layout(), plt.savefig()",
        desc: `tight_layout() prevents axis labels and titles from overlapping in subplots. savefig() exports the figure to a file format like PNG, with options for DPI resolution.`,
        example: `fig.tight_layout()
plt.savefig('trial.png', dpi=200, bbox_inches='tight')`,
        tags: ["saving", "layout"],
        difficulty: "intermediate"
    },
    {
        id: "plt-contours",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "plt.contour(), plt.contourf(), plt.clabel()",
        desc: `Used for 2D visualizations. contourf() creates filled contour plots, contour() creates line contours, and clabel() adds inline text labels to the contour lines.`,
        example: `cs = plt.contour(x_grid, y_grid, z, levels=20)
plt.clabel(cs, fontsize=8)`,
        tags: ["contour", "2d plots"],
        difficulty: "advanced"
    },
    {
        id: "plt-3d-surface",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "plot_surface() (Axes3D)",
        desc: `Creates a 3D surface plot. Requires the subplot projection to be set to '3d'. view_init() adjusts the camera elevation and azimuth angles.`,
        example: `ax = fig.add_subplot(111, projection='3d')
ax.plot_surface(x_grid, y_grid, z, cmap='coolwarm')
ax.view_init(elev=20, azim=45)`,
        tags: ["3d", "surface", "Axes3D"],
        difficulty: "advanced"
    },
    {
        id: "ex-exp-decay",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "Exercise: Exponential Decay",
        desc: `Plot the function f(t) = e^(-t) * cos(2πt). Compare it with the normal cosine function cos(2πt). Plot both functions on two subplots and observe the effect of exponential decay on the cosine wave.`,
        example: `plt.figure(figsize=(10, 6))
plt.subplot(211)
plt.plot(t1, f(t1), 'bo', t2, f(t2), 'k')
plt.title('Exponentially Decaying Cosine')
plt.ylabel('Amplitude')

plt.subplot(212)
plt.plot(t2, np.cos(2*np.pi*t2), 'r--')
plt.title('Regular Cosine')
plt.xlabel('Time')
plt.ylabel('Amplitude')

plt.tight_layout()
plt.show()`,
        tags: ["exercise", "exponential", "decay"],
        difficulty: "intermediate"
    },
    {
        id: "ex-basic-plotting-1",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "Exercise: Basic Plotting",
        desc: `Create a plot showing y = x^2 from x = -10 to 10. Add appropriate labels and a title. Use a dashed red line and set the figure size to (10, 6).`,
        example: `import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-10, 10, 100)
y = x**2

plt.figure(figsize=(10, 6))
plt.plot(x, y, 'r--')
plt.xlabel('X Axis')
plt.ylabel('Y Axis')
plt.title('y = x^2 Plot')
plt.show()`,
        tags: ["exercise", "basic", "plot"],
        difficulty: "beginner"
    },
    {
        id: "ex-multiple-functions",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "Exercise: Multiple Functions",
        desc: `Plot the following functions on the same graph: y = sin(x), y = cos(x), y = sin(x) + cos(x). Use different colors and line styles, add a legend, and label the axes appropriately.`,
        example: `import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 15, 100)
plt.plot(x, np.sin(x), 'b-', label='sin(x)')
plt.plot(x, np.cos(x), 'r--', label='cos(x)')
plt.plot(x, np.sin(x) + np.cos(x), 'g-.', label='sin(x) + cos(x)')

plt.xlabel('X Axis')
plt.ylabel('Y Axis')
plt.title('Trigonometric Functions')
plt.legend()
plt.show()`,
        tags: ["exercise", "multiple", "functions"],
        difficulty: "beginner"
    },
    {
        id: "ex-subplots-grid",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "Exercise: Subplots",
        desc: `Create a 2x2 grid of subplots showing: 1. Line plot of sin(x), 2. Scatter plot of random data, 3. Histogram of normal distribution, 4. Bar chart of your choice.`,
        example: `import numpy as np
import matplotlib.pyplot as plt

fig, axes = plt.subplots(2, 2, figsize=(10, 8))
x = np.linspace(0, 10, 50)

axes[0, 0].plot(x, np.sin(x))
axes[0, 0].set_title('Line Plot of sin(x)')

axes[0, 1].scatter(np.random.rand(30), np.random.rand(30))
axes[0, 1].set_title('Scatter Plot')

axes[1, 0].hist(np.random.randn(1000), bins=20)
axes[1, 0].set_title('Histogram')

axes[1, 1].bar(['A', 'B', 'C'], [3, 7, 5])
axes[1, 1].set_title('Bar Chart')

plt.tight_layout()
plt.show()`,
        tags: ["exercise", "subplots", "grid"],
        difficulty: "intermediate"
    },
    {
        id: "ex-statistical-comparison",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        func: "Exercise: Statistical Comparison",
        desc: `Generate two normal distributions with: Distribution 1: mean=5, std=1. Distribution 2: mean=6, std=1.5. Create overlapping histograms using 'histtype=step' and add a statistics text box inside the plot.`,
        example: `import numpy as np
import matplotlib.pyplot as plt

dist1 = np.random.randn(1000) * 1 + 5
dist2 = np.random.randn(1000) * 1.5 + 6

fig, ax = plt.subplots(figsize=(8, 5))
ax.hist(dist1, bins=30, density=True, histtype='step', label='Dist 1 (μ=5, σ=1)')
ax.hist(dist2, bins=30, density=True, histtype='step', label='Dist 2 (μ=6, σ=1.5)')

textstr = f'Dist 1 Std: {np.std(dist1):.2f}\\nDist 2 Std: {np.std(dist2):.2f}'
ax.text(0.05, 0.95, textstr, transform=ax.transAxes, verticalalignment='top', bbox=dict(facecolor='white', edgecolor='black'))

ax.legend(loc='upper right')
ax.set_title('Overlapping Normal Distributions')
plt.show()`,
        tags: ["exercise", "statistics", "histogram"],
        difficulty: "intermediate"
    },


    // --- LAB 06: SYMPY SYMBOLIC ANALYSIS ---
    {
        id: "sp_init_printing",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "init_printing()",
        desc: "Configures SymPy's rendering engine to automatically display equations into crisp, structured LaTeX/MathJax expressions inside the active workspace.",
        example: "import sympy as sp\nsp.init_printing(use_latex='mathjax')",
        tags: ["sympy", "display"],
        difficulty: "beginner"
    },
    {
        id: "sp_symbols",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "symbols('x y z')",
        desc: "Instantiates independent symbolic variables used for constructing exact, un-evaluated algebraic expressions without requiring concrete numerical assignments.",
        example: "import sympy as sp\nx, y, z = sp.symbols('x y z')\nexpr = x + 2*y + z**2",
        tags: ["sympy", "symbolic"],
        difficulty: "beginner"
    },
    {
        id: "sp_rational_exact",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "Rational(p, q)",
        desc: "Constructs an exact fractional representation of p/q. Prevents the native Python environment from truncating the value into a loose floating decimal approximation.",
        example: "import sympy as sp\nfractional_sum = sp.Rational(2, 7) + sp.Rational(5, 3)\nprint(fractional_sum)  # Outputs: 41/21",
        tags: ["sympy", "rational"],
        difficulty: "beginner"
    },
    {
        id: "sp_imaginary_constant",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "SymPy Imaginary Unit 'I'",
        desc: "Represents the exact imaginary unit identity constant i. Enables high-fidelity math manipulation over the complex numbers spectrum without decimal loss.",
        example: "import sympy as sp\ncomplex_num = (3 + 4*sp.I) * (2 - sp.I)\nprint(sp.simplify(complex_num))  # Outputs: 10 + 5*I",
        tags: ["sympy", "complex"],
        difficulty: "intermediate"
    },
    {
        id: "sp_pi_constant",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "SymPy 'pi'",
        desc: "Represents the exact mathematical transcendental circle constant ratio π inside symbolic calculus routines.",
        example: "import sympy as sp\nprint(sp.sin(sp.pi / 2))  # Outputs exact structural evaluation: 1",
        tags: ["sympy", "constants"],
        difficulty: "beginner"
    },
    {
        id: "sp_infinity_constant",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "SymPy Infinity 'oo'",
        desc: "Represents positive mathematical infinity (∞) inside computational equations, symbol boundaries, and integration or limits endpoints.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.limit(1/x, x, sp.oo))  # Outputs: 0",
        tags: ["sympy", "constants"],
        difficulty: "intermediate"
    },
    {
        id: "sp_simplify_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "simplify(expr)",
        desc: "Intelligently parses a target math expression and executes structural identities to compress it into its shortest mathematical notation format.",
        example: "import sympy as sp\nx, y = sp.symbols('x y')\nE = (x + y)**3 - (x - y)**3\nprint(sp.simplify(E))  # Outputs: 2*y*(3*x**2 + y**2)",
        tags: ["sympy", "simplification"],
        difficulty: "intermediate"
    },
    {
        id: "sp_expand_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "expand(expr)",
        desc: "Expands combined polynomial configurations, distributing product bounds completely across addition components.",
        example: "import sympy as sp\nx, y = sp.symbols('x y')\nprint(sp.expand((x + y)**2))  # Outputs: x**2 + 2*x*y + y**2",
        tags: ["sympy", "algebra"],
        difficulty: "beginner"
    },
    {
        id: "sp_subs_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: ".subs([(old, new)])",
        desc: "Performs clean element replacement by matching a target symbol placeholder or sub-expression and mapping it to a fresh variable numeric point.",
        example: "import sympy as sp\nx = sp.symbols('x')\nexpr = x**2 + 1\nprint(expr.subs(x, 4))  # Evaluates expression at point 4. Outputs: 17",
        tags: ["sympy", "evaluation"],
        difficulty: "beginner"
    },
    {
        id: "sp_factor_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "factor(expr)",
        desc: "Deconstructs a complex polynomial equation down into its individual irreducible composite factors. Setting gaussian=True factors calculations across complex spaces.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.factor(x**2 - 1))  # Outputs: (x - 1)*(x + 1)",
        tags: ["sympy", "factorization"],
        difficulty: "intermediate"
    },
    {
        id: "sp_together_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "together(expr)",
        desc: "Combines decoupled rational rational statements by calculating common denominator footprints and merging numerator additions.",
        example: "import sympy as sp\nx, y = sp.symbols('x y')\nprint(sp.together(1/x + 1/y))  # Outputs: (x + y)/(x*y)",
        tags: ["sympy", "algebra"],
        difficulty: "intermediate"
    },
    {
        id: "sp_arg_complex",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "arg(c)",
        desc: "Calculates the structural phase angle or quadrant argument of a target complex number equation statement.",
        example: "import sympy as sp\nprint(sp.arg(5 + 12*sp.I))  # Outputs symbolic definition: atan(12/5)",
        tags: ["sympy", "complex"],
        difficulty: "intermediate"
    },
    {
        id: "sp_abs_complex",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "abs(c)",
        desc: "Computes the exact vector norm, magnitude modulus, or absolute geometric length distance properties of a complex mathematical object.",
        example: "import sympy as sp\nprint(sp.abs(5 + 12*sp.I))  # Outputs exact scalar evaluation: 13",
        tags: ["sympy", "complex"],
        difficulty: "intermediate"
    },
    {
        id: "sp_eq_constructor",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "Eq(lhs, rhs)",
        desc: "Constructs a robust logical symbolic equation model checking balance equality between a left-hand side and right-hand side structure.",
        example: "import sympy as sp\nx = sp.symbols('x')\nequation = sp.Eq(x**2 - 4, 0)  # Models the structure x^2 - 4 = 0",
        tags: ["sympy", "equation"],
        difficulty: "intermediate"
    },
    {
        id: "sp_solveset_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "solveset(eq, var, domain)",
        desc: "Solves a single equation targeting an explicit single evaluation variable across declared constraint spaces (like S.Reals or explicit intervals).",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.solveset(sp.Eq(x**2 - 1, 0), x))  # Outputs exact root sets: {-1, 1}",
        tags: ["sympy", "solving"],
        difficulty: "intermediate"
    },
    {
        id: "sp_solve_systems",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "solve([eqs], [vars])",
        desc: "Solves comprehensive systems of overlapping linear or non-linear scalar math equations simultaneously.",
        example: "import sympy as sp\nx, y = sp.symbols('x y')\neq1 = sp.Eq(x + y, 5)\neq2 = sp.Eq(x - y, 1)\nprint(sp.solve([eq1, eq2], [x, y]))  # Outputs: {x: 3, y: 2}",
        tags: ["sympy", "solving"],
        difficulty: "advanced"
    },
    {
        id: "sp_limit_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "limit(expr, var, point)",
        desc: "Calculates the analytical mathematical calculus limit structure of an equation expression as a specified variable parameter converges towards a target boundary point.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.limit(sp.sin(x)/x, x, 0))  # Outputs fundamental limit: 1",
        tags: ["sympy", "calculus"],
        difficulty: "advanced"
    },
    {
        id: "sp_summation_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "summation(expr, (v, s, e))",
        desc: "Evaluates the analytical summation progression of a specified sequence formula structure across defined numerical range index markers inclusive.",
        example: "import sympy as sp\nn = sp.symbols('n')\nprint(sp.summation(n**2, (n, 1, 100)))  # Computes analytical sum",
        tags: ["sympy", "calculus"],
        difficulty: "advanced"
    },
    {
        id: "sp_product_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "product(expr, (v, s, e))",
        desc: "Evaluates the analytical multiplicative infinite or finite product loop sequence of an algebraic target formula layout.",
        example: "import sympy as sp\nk = sp.symbols('k')\nprint(sp.product(k, (k, 1, 8)))  # Computes exact product sequence (factorial)",
        tags: ["sympy", "calculus"],
        difficulty: "advanced"
    },
    {
        id: "sp_diff_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "diff(expr, var, n)",
        desc: "Calculates the nth structural exact derivative rate of change evaluation of an expression with respect to a chosen derivative marker variable.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.diff(x**4, x, 2))  # Performs 2nd order derivative. Outputs: 12*x**2",
        tags: ["sympy", "calculus"],
        difficulty: "intermediate"
    },
    {
        id: "sp_integrate_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "integrate(expr, bounds)",
        desc: "Computes definite integrals if passed with an operational bounds sequence tuple tracking variable ranges, or indefinites if missing step metrics.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.integrate(x**2, (x, 0, 3)))  # Computes area under curve. Outputs: 9",
        tags: ["sympy", "calculus"],
        difficulty: "intermediate"
    },
    {
        id: "sp_series_expansion",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: ".series(var, point, order)",
        desc: "Generates high-fidelity Taylor, Maclaurin, or Laurent series function mathematical expansion profiles computed closely centered around a target validation anchor point.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.sin(x).series(x, 0, 5))  # Returns sequence expansion polynomial",
        tags: ["sympy", "calculus"],
        difficulty: "advanced"
    },
    {
        id: "sp_matrix_constructor",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "Matrix([[...]])",
        desc: "Initializes structural multi-dimensional linear systems matrices storing completely symbolic variables and exact algebraic fractions.",
        example: "import sympy as sp\nx = sp.symbols('x')\nM = sp.Matrix([[x, 1], [0, x]])",
        tags: ["sympy", "linear algebra"],
        difficulty: "intermediate"
    },
    {
        id: "sp_matrix_det",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "Matrix.det()",
        desc: "Calculates the analytical symbolic determinant equation profile of a custom constructed square symbolic SymPy Matrix structure.",
        example: "import sympy as sp\na, b, c, d = sp.symbols('a b c d')\nM = sp.Matrix([[a, b], [c, d]])\nprint(M.det())  # Outputs exact polynomial: a*d - b*c",
        tags: ["sympy", "linear algebra"],
        difficulty: "advanced"
    },
    {
        id: "sp_matrix_eigenvals",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "Matrix.eigenvals()",
        desc: "Computes the exact mathematical eigenvalues of a symbolic matrix, returning a structural mapping showing specific eigenvalues alongside their multiplicities.",
        example: "import sympy as sp\nM = sp.Matrix([[2, 0], [0, 5]])\nprint(M.eigenvals())  # Outputs mapped solution: {2: 1, 5: 1}",
        tags: ["sympy", "linear algebra"],
        difficulty: "advanced"
    },
    {
        id: "sp_matrix_rref",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "Matrix.rref()",
        desc: "Performs full elementary row transformations to reduce a symbolic matrix layout to its Reduced Row Echelon Form. Returns a tuple with the matrix and pivot columns.",
        example: "import sympy as sp\nM = sp.Matrix([[1, 2], [3, 7]])\nreduced_M, pivots = M.rref()",
        tags: ["sympy", "linear algebra"],
        difficulty: "advanced"
    },
    {
        id: "sp_exp_func",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "exp(x)",
        desc: "Represents the exact symbolic continuous exponential transcendental function model e^x inside tracking math calculus computations.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.diff(sp.exp(2*x), x))  # Outputs: 2*exp(2*x)",
        tags: ["sympy", "functions"],
        difficulty: "intermediate"
    },
    {
        id: "sp_ln_func",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "ln(x)",
        desc: "Models the exact symbolic natural base-e logarithm formula mapping logic across defined calculation boundaries.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.integrate(1/x, x))  # Outputs structural formulation: log(x)",
        tags: ["sympy", "functions"],
        difficulty: "intermediate"
    },
    {
        id: "sp_trig_functions",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "sin(x) / cos(x) / tan(x)",
        desc: "Executes precise, non-evaluated symbolic representation tracking models across standard trigonometric configurations.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.simplify(sp.sin(x)**2 + sp.cos(x)**2))  # Evaluates to structural scalar: 1",
        tags: ["sympy", "trigonometry"],
        difficulty: "intermediate"
    },
    {
        id: "sp_plot_2d",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "plot(expr, range)",
        desc: "Generates high-performance interactive 2D visualization coordinate charts mapping a symbolic equation across a specified single-variable interval step configuration.",
        example: "import sympy as sp\nx = sp.symbols('x')\n# sp.plot(x**2, (x, -5, 5))  # Generates 2D parabola chart visualization",
        tags: ["sympy", "plotting"],
        difficulty: "advanced"
    },
    {
        id: "sp_plot_3d",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "plot3d(expr, range_x, range_y)",
        desc: "Renders 3D mathematical surface contours graphing functional operations with two independent variable coordinates over dual bounding box matrices.",
        example: "import sympy as sp\nx, y = sp.symbols('x y')\n# sp.plot3d(x**2 - y**2, (x, -2, 2), (y, -2, 2))  # Generates 3D hyperbolic saddle chart",
        tags: ["sympy", "plotting"],
        difficulty: "advanced"
    },
    {
        id: "sp_shorthand_s",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "S(string / int)",
        desc: "Shorthand parsing function that forces string equations or raw integers into exact symbolic rational values, preventing standard Python float truncation.",
        example: "import sympy as sp\nprint(sp.S(\"5/2\"))  # Outputs: 5/2\nprint(sp.S(5)/2)    # Outputs: 5/2",
        tags: ["sympy", "conversion"],
        difficulty: "beginner"
    },
    {
        id: "sp_complex_parts",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "re(z) / im(z)",
        desc: "Extracts the real component (re) or the imaginary component (im) from a complex algebraic number structure.",
        example: "import sympy as sp\nw = 3 + 7*sp.I\nprint(sp.re(w))  # Outputs: 3\nprint(sp.im(w))  # Outputs: 7",
        tags: ["sympy", "complex"],
        difficulty: "intermediate"
    },
    {
        id: "sp_complex_conjugate",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "conjugate(z) / .conjugate()",
        desc: "Calculates the algebraic conjugate of a complex expression by flipping the operational sign of its imaginary component component.",
        example: "import sympy as sp\nw = 3 + 7*sp.I\nprint(sp.conjugate(w))  # Outputs: 3 - 7*I\nprint(w.conjugate())    # Outputs: 3 - 7*I",
        tags: ["sympy", "complex"],
        difficulty: "intermediate"
    },
    {
        id: "sp_numerical_evalf",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "expr.evalf(n) / expr.n(n)",
        desc: "Evaluates a symbolic expression down to a decimal approximation containing exactly 'n' significant digits.",
        example: "import sympy as sp\nprint(sp.pi.evalf(60))  # Yields 60 digits of Pi\nprint(sp.pi.n(60))      # Identical evaluation alias",
        tags: ["sympy", "evaluation"],
        difficulty: "intermediate"
    },
    {
        id: "sp_integer_factorint",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "factorint(n)",
        desc: "Computes prime factorization of an integer, returning a dictionary structure where keys are prime factors and values indicate their multiplicities.",
        example: "import sympy as sp\nprint(sp.factorint(240))  # Outputs: {2: 4, 3: 1, 5: 1}\nsp.pprint(sp.factorint(240, visual=True))  # Shows 2**4 * 3 * 5",
        tags: ["sympy", "number theory"],
        difficulty: "intermediate"
    },
    {
        id: "sp_srepr_tree",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "srepr(expr)",
        desc: "Exposes the exact, low-level internal expression tree layout that SymPy uses to parse variables, integers, and mathematical functions.",
        example: "import sympy as sp\nx, y = sp.symbols('x y')\nprint(sp.srepr(x - y))  # Add(Symbol('x'), Mul(Integer(-1), Symbol('y')))",
        tags: ["sympy", "introspection"],
        difficulty: "advanced"
    },
    {
        id: "sp_inverse_trig",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "asin(x) / acos(x) / atan(x)",
        desc: "Symbolic inverse trigonometric functions. SymPy maintains exact evaluations and natively evaluates identities with standard forward trig operations.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.asin(sp.S(1)/2))  # Outputs: pi/6\nprint(sp.sin(sp.asin(x))) # Outputs: x",
        tags: ["sympy", "trigonometry"],
        difficulty: "intermediate"
    },
    {
        id: "sp_cancel_factors",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "cancel(expr)",
        desc: "Cleans up rational expressions by transforming them into standard canonical form and cancelling out common polynomial factors inside fractions.",
        example: "import sympy as sp\nx, y = sp.symbols('x y')\nexpr = (x**2 + x*y) / x\nprint(sp.cancel(expr))  # Outputs: x + y",
        tags: ["sympy", "simplification"],
        difficulty: "intermediate"
    },
    {
        id: "sp_factor_advanced",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "factor(expr, gaussian / extension)",
        desc: "Advanced polynomial factoring. Operates over rational bounds by default, but can be configured to factor over Gaussian integers or specified algebraic extensions.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.factor(x**2 + 1, gaussian=True))     # Outputs: (x - I)*(x + I)\nprint(sp.factor(x**2 - 5, extension=sp.sqrt(5))) # (x - sqrt(5))*(x + sqrt(5))",
        tags: ["sympy", "factorization"],
        difficulty: "advanced"
    },
    {
        id: "sp_collect_terms",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "collect(expr, variable)",
        desc: "Scans an algebraic expression and gathers common polynomial powers with respect to a designated structural tracking symbol.",
        example: "import sympy as sp\nx, y, z, w = sp.symbols('x y z w')\nexpr = x*z + x**2 + x + x*y + x**2*w + 5 - x**3\nprint(sp.collect(expr, x))  # Groups by matching powers of x",
        tags: ["sympy", "algebra"],
        difficulty: "intermediate"
    },
    {
        id: "sp_ratsimp_denominator",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "ratsimp(expr)",
        desc: "Puts decoupled symbolic fraction sequences over a unified common denominator and applies aggressive algebraic simplification formulas.",
        example: "import sympy as sp\nx, y, z = sp.symbols('x y z')\nexpr = 1/(x + 1) + 1/y + 1/z\nprint(sp.ratsimp(expr))",
        tags: ["sympy", "simplification"],
        difficulty: "intermediate"
    },
    {
        id: "sp_apart_decomposition",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "apart(expr)",
        desc: "Computes the partial fraction decomposition of a complex rational fraction polynomial function.",
        example: "import sympy as sp\nx = sp.symbols('x')\nexpr = (3*x**2 + 52*x + 265) / ((x - 7)*(x - 1)*(x + 34))\nprint(sp.apart(expr))  # Outputs: 1/(x + 34) + 1/(x - 1) + 1/(x - 7)",
        tags: ["sympy", "algebra"],
        difficulty: "advanced"
    },
    {
        id: "sp_radsimp_rationalize",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "radsimp(expr)",
        desc: "Rationalizes radical expressions by eliminating square roots and complex coefficients from fraction denominators.",
        example: "import sympy as sp\nexpr = 1 / (1 + sp.sqrt(5))\nprint(sp.radsimp(expr))  # Outputs: (-1 + sqrt(5))/4",
        tags: ["sympy", "simplification"],
        difficulty: "intermediate"
    },
    {
        id: "sp_polynomial_roots",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "roots(expr, var)",
        desc: "Calculates the roots of a polynomial equation, returning a dictionary structure containing the precise numeric/symbolic root values and their respective multiplicities.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.roots(x**2 - 6))  # Outputs: {-sqrt(6): 1, sqrt(6): 1}",
        tags: ["sympy", "solving"],
        difficulty: "advanced"
    },
    {
        id: "sp_unevaluated_objects",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "Sum / Product / Derivative / Integral",
        desc: "Capitalized variants that represent inert mathematical structures without performing active calculation steps. Use the .doit() method to force calculation.",
        example: "import sympy as sp\nn = sp.symbols('n')\ninert_sum = sp.Sum(1/n**2, (n, 1, sp.oo))\nprint(sp.Eq(inert_sum, inert_sum.doit()))  # Renders the formal proof expression",
        tags: ["sympy", "calculus"],
        difficulty: "advanced"
    },
    {
        id: "sp_multiple_integrals",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "integrate(expr, var1, var2)",
        desc: "Computes multiple indefinite or definite integrations over arrays of multiple specified variable dimension ranges sequentially.",
        example: "import sympy as sp\nx, y = sp.symbols('x y')\nprint(sp.integrate(x**2 + y**2, x, y))  # Double indefinite integral",
        tags: ["sympy", "calculus"],
        difficulty: "advanced"
    },
    {
        id: "sp_dsolve_systems",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "dsolve([equations], [functions])",
        desc: "Solves individual ordinary differential equations (ODEs) or interconnected systems of multi-variable differential equations simultaneously.",
        example: "import sympy as sp\nt = sp.symbols('t')\nx_f, y_f = sp.Function('x'), sp.Function('y')\neq_a = sp.Eq(x_f(t).diff(t), x_f(t)*y_f(t)*sp.sin(t))\neq_b = sp.Eq(y_f(t).diff(t), y_f(t)**2*sp.sin(t))\nprint(sp.dsolve([eq_a, eq_b]))",
        tags: ["sympy", "differential equations"],
        difficulty: "advanced"
    },
    {
        id: "sp_plot_extend",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "p1.extend(p2)",
        desc: "Combines decoupled functional plots together by appending another figure layer asset directly onto the canvas framework of an existing base plot.",
        example: "import sympy as sp\nx = sp.symbols('x')\np1 = sp.plot(x, show=False, line_color='b')\np2 = sp.plot(x**2, show=False, line_color='r')\np1.extend(p2)\np1.show()",
        tags: ["sympy", "plotting"],
        difficulty: "advanced"
    },
    {
        id: "sp_plot_parametric_2d",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "plot_parametric(x_expr, y_expr, range)",
        desc: "Renders 2D visual parametric curves mapping distinct X and Y expressions against an independent tracking coordinate variable.",
        example: "from sympy.plotting import plot_parametric\nimport sympy as sp\nu = sp.symbols('u')\nplot_parametric(sp.cos(3*u), sp.sin(2*u), (u, -5, 5))",
        tags: ["sympy", "plotting"],
        difficulty: "advanced"
    },
    {
        id: "sp_plot_parametric_line_3d",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "plot3d_parametric_line(x, y, z, range)",
        desc: "Generates 3D spatial curve lines (such as a helix) tracking single operational ranges across independent coordinate dimensions.",
        example: "from sympy.plotting import plot3d_parametric_line\nimport sympy as sp\nu = sp.symbols('u')\nplot3d_parametric_line(sp.cos(u), sp.sin(u), u, (u, -15, 15))",
        tags: ["sympy", "plotting"],
        difficulty: "advanced"
    },
    {
        id: "sp_plot_parametric_surface_3d",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "plot3d_parametric_surface(x, y, z, r1, r2)",
        desc: "Renders high-fidelity 3D structural surface contours (like a torus) mapping three coordinate dimensions across dual range boundaries.",
        example: "from sympy.plotting import plot3d_parametric_surface\nimport sympy as sp\nu, v = sp.symbols('u v')\nX = sp.cos(u)*(5 + 2*sp.cos(v))\nY = sp.sin(u)*(5 + 2*sp.cos(v))\nZ = 2*sp.sin(v)\nplot3d_parametric_surface(X, Y, Z, (u, 0, 5), (v, -5, 5))",
        tags: ["sympy", "plotting"],
        difficulty: "advanced"
    },
    {
        id: "sp_plot_implicit_regions",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "plot_implicit(equation / And)",
        desc: "Plots implicit algebraic functions or equations where variables cannot be isolated directly. Can combine boundaries using And operators to display targeted inequality constraint regions.",
        example: "import sympy as sp\nx, y = sp.symbols('x y')\n# To plot an inequality region:\nsp.plot_implicit(sp.And(y > 2*x + 1, y < 5*x))",
        tags: ["sympy", "plotting"],
        difficulty: "advanced"
    },
    {
        id: "sp_mpmath_cplot",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "mpmath.cplot(func, re_range, im_range)",
        desc: "Visualizes functions across complex variables. Uses hue changes to map output phase angles and transparency variables to denote changing modulus sizes.",
        example: "import mpmath\n# Visualizes the fifth roots of unity complex phase landscape\nmpmath.cplot(lambda z: z**5 - 1, [-2, 2], [-2, 2])",
        tags: ["sympy", "plotting"],
        difficulty: "advanced"
    },
    {
        id: "sp_matrix_flat_list",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "Matrix(rows, cols, [flat_list])",
        desc: "Alternative symbolic matrix constructor that pre-allocates programmatic sizing layouts and maps list values line-by-line sequentially.",
        example: "import sympy as sp\nM = sp.Matrix(2, 3, [1, 2, 3, 4, 5, 6])\nprint(M)  # Renders 2 rows by 3 columns layout framework",
        tags: ["sympy", "linear algebra"],
        difficulty: "beginner"
    },
    {
        id: "sp_matrix_power_inverse",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "M**-1 / M.transpose()",
        desc: "Computes structural operations over matrix spaces. Power index operators calculated with negative steps yield clean symbolic inversions, and .transpose() flips layout coordinates.",
        example: "import sympy as sp\nM = sp.Matrix([[5, 2], [-1, 7]])\nprint(M**-1)       # Yields exact fractional system inverse\nprint(M.transpose()) # Returns transposed matrix array",
        tags: ["sympy", "linear algebra"],
        difficulty: "advanced"
    },
    {
        id: "sp_matrix_entry_access",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "M[r, c] / .row(i) / .col(j)",
        desc: "Accesses elements, rows, or columns inside matrix dimensions using zero-based index parameters.",
        example: "import sympy as sp\nM = sp.Matrix([[1, 2], [3, 4]])\nprint(M[0, 1])   # Target component element: 2\nprint(M.row(1))  # Returns complete matrix row entry slice",
        tags: ["sympy", "linear algebra"],
        difficulty: "beginner"
    },
    {
        id: "sp_matrix_generators",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "ones() / zeros() / eye() / diag()",
        desc: "Generates special standard symbolic matrix arrays block structures filled entirely with ones, zeros, main-diagonal identity flags, or designated diagonal entries.",
        example: "import sympy as sp\nprint(sp.zeros(2, 4))       # 2x4 zero block matrix\nprint(sp.diag(1, 2, 3))     # Diagonal matrix configuration\nprint(sp.eye(3))            # 3x3 standard linear system identity matrix",
        tags: ["sympy", "linear algebra"],
        difficulty: "beginner"
    },
    {
        id: "sp_matrix_nullspace",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "Matrix.nullspace()",
        desc: "Calculates the null space vectors of a matrix, returning a list of basis vectors that span the kernel space solution coordinates.",
        example: "import sympy as sp\nM = sp.Matrix([[1, 2, 0, 3], [2, 6, 5, 1], [-1, -4, -5, 2]])\nfor v in M.nullspace():\n    print(v.T)",
        tags: ["sympy", "linear algebra"],
        difficulty: "advanced"
    },
    {
        id: "sp_matrix_characteristic_poly",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "Matrix.charpoly(x).as_expr()",
        desc: "Derives the characteristic polynomial equation model of a square matrix matrix workspace expressed with a specified variable tracking parameter.",
        example: "import sympy as sp\nx = sp.symbols('x')\nM = sp.Matrix([[3, 2], [5, 3]])\nprint(M.charpoly(x).as_expr()) # Outputs symbolic polynomial form",
        tags: ["sympy", "linear algebra"],
        difficulty: "advanced"
    },
    {
        id: "sp_matrix_eigenvects_loop",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "Matrix.eigenvects()",
        desc: "Computes eigenvalues, multiplicities, and associated eigenvectors for a symbolic matrix workspace.",
        example: "import sympy as sp\nM = sp.Matrix([[3, 2], [5, 3]])\nfor val, mult, vects in M.eigenvects():\n    print(f\"Eigenvalue: {val}, Vector: {vects[0].T}\")",
        tags: ["sympy", "linear algebra"],
        difficulty: "advanced"
    },

        // --- NEW: Loop Control Statements (Lecture Content) ---
    {
        id: "python-break",
        chap: "control-flow",
        chapTitle: "Loop Control Statements",
        func: "break",
        desc: `The break statement terminates the loop containing it. Control of the program flows to the statement immediately after the body of the loop. If the break statement is inside a nested loop (loop inside another loop), the break statement will terminate the innermost loop.

Key Differences (vs continue):
- Action: Exits the entire loop
- Flow: Jumps to code after the loop
- Use Case: Stop the loop early`,
        example: `# Use of break statement inside the loop
for val in "string":
    if val == "i":
        break
    print(val)
print("The end")`,
        tags: ["loop", "control flow", "break"],
        difficulty: "beginner"
    },
    {
        id: "python-continue",
        chap: "control-flow",
        chapTitle: "Loop Control Statements",
        func: "continue",
        desc: `The continue statement is used to skip the rest of the code inside a loop for the current iteration only. Loop does not terminate but continues on with the next iteration.

Key Differences (vs break):
- Action: Skips current iteration
- Flow: Jumps to next item in loop
- Use Case: Skip one item`,
        example: `# Example 1: Skip zero to avoid division errors
numbers = [5, 0, 2, 4]
for num in numbers:
    if num == 0:
        continue 
    print(10 / num)

# Example 2: Skip even numbers
for num in range(1, 6): # Numbers 1 to 5
    if num % 2 == 0: # If number is even
        continue # Skip the rest of this iteration
    print(num)`,
        tags: ["loop", "control flow", "continue"],
        difficulty: "beginner"
    },
    {
        id: "python-pass",
        chap: "control-flow",
        chapTitle: "Loop Control Statements",
        func: "pass",
        desc: `pass is a built-in Python statement that does nothing. It is used as a placeholder when a statement is syntactically required, but no action is needed yet.`,
        example: `def my_function():
    pass`,
        tags: ["placeholder", "syntax", "pass"],
        difficulty: "beginner"
    },
    {
        id: "ex-break-100",
        chap: "control-flow",
        chapTitle: "Loop Control Statements",
        func: "Exercise: Stop at 100",
        desc: `Write a program to add numbers from 1 upwards until the sum exceeds 100, then stop the loop.`,
        example: `s=0
while True:
    if s>100:
        break
    else:
        s+=1
print(s)`,
        tags: ["exercise", "break"],
        difficulty: "beginner"
    },
    {
        id: "ex-continue-uppercase",
        chap: "control-flow",
        chapTitle: "Loop Control Statements",
        func: "Exercise: Iterate and Print Uppercase",
        desc: `Write a program to iterate through a string and print only the uppercase letters.`,
        example: `string=input('enter a string')
for i in string:
    if i==i.lower():
        continue
    print(i,end='')`,
        tags: ["exercise", "continue"],
        difficulty: "beginner"
    },

        // --- NEW: Control Flow & Iteration (Lecture Content) ---
    {
        id: "python-if-elif-else",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "if / elif / else",
        desc: `Branching statements that execute code blocks based on conditions defined by logical expressions. The 'if' keyword is followed by a condition, optionally followed by 'elif' for multiple conditions, and 'else' for when all conditions are FALSE.`,
        example: `cost = 6
cash = 10
if cost < cash:
    print('You may buy')
elif cost == cash:
    print('Exact change!')
else:
    print('Sorry, you need more cash')`,
        tags: ["branching", "if-else", "logic", "control flow"],
        difficulty: "beginner"
    },
    {
        id: "python-lambda",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "lambda",
        desc: `Anonymous functions in Python. Used to define small, one-line functions without needing the 'def' keyword.`,
        example: `quadratic_soln_single = lambda a, b, c: (-b + math.sqrt(b**2 - 4*a*c)) / (2 * a)`,
        tags: ["function", "lambda", "anonymous"],
        difficulty: "intermediate"
    },
    {
        id: "python-for-loop",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "for",
        desc: `Loops that run for a fixed number of times. They simply repeat a set of code iterating over elements of a sequence or iterable.`,
        example: `liste1 = [10, 20, 30, 40]
for i in liste1:
    print(i)`,
        tags: ["loop", "iteration", "for"],
        difficulty: "beginner"
    },
    {
        id: "python-while-loop",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "while",
        desc: `Loops that run until a condition is met. Unlike 'for' loops, they do not increment automatically and require manual initialization and explicit incrementing to avoid infinite loops.`,
        example: `i=1
while(np.sqrt(i) <= 3.6):
    print('square root of', i,'is', np.sqrt(i))
    i+=1`,
        tags: ["loop", "iteration", "while"],
        difficulty: "beginner"
    },
    {
        id: "python-range",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "range()",
        desc: `Generates a sequence of numbers using range(start, end, step). Note that the 'end' value is exclusive.`,
        example: `for i in range(1, 11, 2):
    print(i) # Produces 1, 3, 5, 7, 9`,
        tags: ["loop", "range", "generator"],
        difficulty: "beginner"
    },
    {
        id: "python-np-arange",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "np.arange()",
        desc: `A NumPy function used to generate loop values for non-integers, unlike Python's built-in range() which only accepts integers.`,
        example: `import numpy as np
np.arange(1, 5.2, 0.2)`,
        tags: ["numpy", "range", "array"],
        difficulty: "intermediate"
    },
    {
        id: "python-list-comprehension",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "List Comprehension",
        desc: `Allows lists to be created from other sequences with a very compact syntax: [Output Input_sequence Conditions]. Supports if-conditions, if-else statements, and nested loops.`,
        example: `squared_even_numbers = [num**2 if num % 2 == 0 else num for num in numbers]`,
        tags: ["comprehension", "list", "iteration"],
        difficulty: "intermediate"
    },
    {
        id: "python-dict-comprehension",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "Dictionary Comprehension",
        desc: `Similar to list comprehension, this allows dictionaries to be created with a highly compact syntax.`,
        example: `x = {'a': 1, 'b': 2, 'c': 3}
new_dict = {key:v**2 for (key, v) in x.items()}`,
        tags: ["comprehension", "dictionary"],
        difficulty: "intermediate"
    },
    {
        id: "python-indentation",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "Indentation",
        desc: `Adding spaces at the start of a line to show which code belongs together. Required to define structural code blocks like if, for, while, and functions to prevent an IndentationError.`,
        example: `if True:
    print("true") # Properly indented`,
        tags: ["syntax", "indentation", "error"],
        difficulty: "beginner"
    },
    {
        id: "python-max",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "max()",
        desc: `Python's built-in function to find the largest element in an iterable or a list.`,
        example: `current_max = max(working_list)`,
        tags: ["math", "list", "max"],
        difficulty: "beginner"
    },
    {
        id: "python-list-methods",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "List Methods (.append, .remove, .copy)",
        desc: `.append(x) adds an item to the end, .remove(x) removes the first instance of an item, and .copy() creates a shallow copy of the list.`,
        example: `working_list = x.copy()
result.append(current_max)
working_list.remove(current_max)`,
        tags: ["list", "methods", "data structure"],
        difficulty: "beginner"
    },
    {
        id: "python-set",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "set()",
        desc: `Built-in function to create a set, an unordered collection of unique elements. Often used to quickly remove duplicate entries from a list.`,
        example: `working_set = set(x)`,
        tags: ["set", "data structure", "duplicates"],
        difficulty: "intermediate"
    },
    {
        id: "python-string-methods",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "String Methods (.isalpha, .upper, .split)",
        desc: `.isalpha() checks if a character is an alphabet letter, .upper() converts to uppercase, and .split() separates a string into a list of substrings.`,
        example: `if c.isalpha():
    morse_str += morse_code_dict[c.upper()]
Mori = text.split()`,
        tags: ["string", "methods"],
        difficulty: "beginner"
    },
    {
        id: "python-dict-methods",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "Dictionary Methods (.keys, .values, .items)",
        desc: `Methods to access parts of a dictionary: .keys() returns dictionary keys, .values() returns the values, and .items() returns key-value pairs.`,
        example: `List_key = list(morse_code_dict.keys())
list_values = list(morse_code_dict.values())`,
        tags: ["dictionary", "methods"],
        difficulty: "beginner"
    },
    {
        id: "python-recursion",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "Recursion",
        desc: `A technique where a function calls itself. It requires base cases to stop the execution tree from expanding infinitely, and a recursive step to progress towards those base cases.`,
        example: `def fibonacci(n):
    if n == 1 or n == 2:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)`,
        tags: ["function", "recursion", "algorithm"],
        difficulty: "intermediate"
    },
    {
        id: "ex-quad-solver",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "Exercise: Quadratic Equation Solver",
        desc: `Write a function \`quadratic_soln(a, b, c)\` that returns both roots of the quadratic equation. Also write a lambda function \`quadratic_soln_single(a, b, c)\` that returns only the larger root.`,
        example: `import math

def quadratic_soln(a, b, c):
    if (b**2 - 4*a*c) >= 0:
        root1 = (-b + math.sqrt(b**2 - 4*a*c)) / (2 * a)
        root2 = (-b - math.sqrt(b**2 - 4*a*c)) / (2 * a)
        return root1, root2
    else:
        return "No real roots"

quadratic_soln_single = lambda a, b, c: (-b + math.sqrt(b**2 - 4*a*c)) / (2 * a)`,
        tags: ["exercise", "function", "lambda"],
        difficulty: "intermediate"
    },
    {
        id: "ex-n-max",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "Exercise: Find n Largest Elements",
        desc: `Write a function \`my_n_max(x, n)\` to return a list consisting of the n largest elements of x. You may assume that x is a one-dimensional list with no duplicate entries, and that n is a strictly positive integer smaller than the length of x. Do not alter the original list.`,
        example: `def my_n_max(x, n):
    working_list = x.copy()
    result = []
    for _ in range(n):
        current_max = max(working_list)
        result.append(current_max)
        working_list.remove(current_max)
    return result`,
        tags: ["exercise", "function", "list"],
        difficulty: "intermediate"
    },
    {
        id: "ex-morse-encoder",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "Exercise: Morse Code Encoder",
        desc: `Write a function \`morse_message(text)\` that uses a dictionary to map letters and numbers to Morse code. Read a message, convert each letter/number, separate sequences with a space, and ignore non-alphanumeric characters. Use \`str.isalpha()\`.`,
        example: `def morse_message(text):
    morse_str = ""
    for c in text:
        if c.isalpha():
            morse_str += morse_code_dict[c.upper()]
            morse_str += " "
    return morse_str`,
        tags: ["exercise", "string", "dictionary"],
        difficulty: "intermediate"
    },
    {
        id: "ex-fibonacci-recursion",
        chap: "control-flow",
        chapTitle: "Control Flow & Iteration",
        func: "Exercise: Fibonacci Using Recursion",
        desc: `Write a recursive function \`fibonacci(n)\` that computes and returns the Fibonacci of a positive integer n. The base cases are n == 1 or n == 2, both returning 1.`,
        example: `def fibonacci(n):
    if n == 1:
        return 1
    elif n == 2:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)`,
        tags: ["exercise", "recursion", "function"],
        difficulty: "intermediate"
    },
        // --- NEW: Lab 02b: Variables & Data Types ---
    {
        id: "python-data-types",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "Basic Data Types",
        desc: `Python automatically assigns a data type based on the value. Common types include int (integer), float (decimal), str (textual), bool (logical True/False), and complex (complex numbers).`,
        example: `x = 10 # int
y = 3.14 # float
z = "Hello" # str
is_valid = True # bool`,
        tags: ["data types", "variables"],
        difficulty: "beginner"
    },
    {
        id: "python-type",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "type()",
        desc: `A built-in function used to check the data type of a variable.`,
        example: `print(type(x)) # Output: <class 'int'>`,
        tags: ["function", "type checking"],
        difficulty: "beginner"
    },
    {
        id: "python-type-conversion",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "Type Conversion (int(), float(), str())",
        desc: `Functions used to convert variables from one type to another (e.g., converting an integer to a float or string).`,
        example: `x = 5
y = float(x) # 5.0
z = str(x) # '5'`,
        tags: ["conversion", "casting", "data types"],
        difficulty: "beginner"
    },
    {
        id: "python-dynamic-typing",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "Dynamic Typing & Variables",
        desc: `Python is dynamically typed, meaning variable types are determined at runtime, and a variable can hold different types over time. Follow best practices for naming: start with a letter/underscore, avoid spaces and built-in names.`,
        example: `x = 3 # Initially an integer
x = "yes" # Now a string
x = 1.73 # Now a float`,
        tags: ["variables", "dynamic typing"],
        difficulty: "beginner"
    },
    {
        id: "python-strings",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "Strings & Quotes",
        desc: `Strings can be created using single (''), double (""), or triple quotes (''' ''' or """ """). Single and double quotes behave exactly the same. Strings can also be concatenated using the + operator.`,
        example: `str_1 = 'Mouhamed'
str_2 = "Annaba"
str_4 = str_1 + ' ' + str_2`,
        tags: ["strings", "concatenation"],
        difficulty: "beginner"
    },
    {
        id: "python-string-slicing",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "String Slicing [m:n]",
        desc: `Python starts counting from 0. You can select characters from index m up to (but not including) index n using bracket notation [m:n].`,
        example: `str_5 = "Abderrahmane"
print(str_5[0:11]) # Abderrahman
print(str_5[0]) # A`,
        tags: ["strings", "slicing", "indexing"],
        difficulty: "beginner"
    },
    {
        id: "python-in-keyword",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "in / not in",
        desc: `Used for string membership tests. Checks if a substring exists (or does not exist) within a string.`,
        example: `print('me' in 'home') # True
print('ho' not in 'home') # False`,
        tags: ["strings", "membership", "keywords"],
        difficulty: "beginner"
    },
    {
        id: "python-enumerate",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "enumerate()",
        desc: `Returns an enumerate object, useful for iterating with indices. It pairs each element with its index.`,
        example: `word = "Hello"
print(list(enumerate(word)))
# [(0, 'H'), (1, 'e'), (2, 'l'), (3, 'l'), (4, 'o')]`,
        tags: ["built-in", "string", "iteration"],
        difficulty: "intermediate"
    },
    {
        id: "python-len",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "len()",
        desc: `A built-in function that returns the number of items in an object, such as characters in a string or key-value pairs in a dictionary.`,
        example: `word = "Hello NHSM"
print(len(word)) # Output: 10`,
        tags: ["built-in", "length"],
        difficulty: "beginner"
    },
    {
        id: "python-string-case",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: ".lower() / .upper()",
        desc: `String methods used to convert the case of a string to entirely lowercase or uppercase.`,
        example: `word = "PythonIsFunny"
print(word.lower()) # pythonisfunny
print(word.upper()) # PYTHONISFUNNY`,
        tags: ["string methods", "case formatting"],
        difficulty: "beginner"
    },
    {
        id: "python-string-split",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: ".split()",
        desc: `Splits a string into a list of substrings. By default, it splits by spaces, but a different separator can be specified.`,
        example: `sentence = "This will split all words"
print(sentence.split())
# ['This', 'will', 'split', 'all', 'words']`,
        tags: ["string methods", "lists"],
        difficulty: "beginner"
    },
    {
        id: "python-string-join",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: ".join()",
        desc: `Joins elements of a list into a single string, using a specified delimiter.`,
        example: `word_list = ['This', 'will', 'join']
print('*'.join(word_list))
# This*will*join`,
        tags: ["string methods", "lists"],
        difficulty: "beginner"
    },
    {
        id: "python-string-find",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: ".find()",
        desc: `Finds the first occurrence of a specified substring and returns its index.`,
        example: `print('Happy Day with python'.find('ay')) # 7`,
        tags: ["string methods", "search"],
        difficulty: "beginner"
    },
    {
        id: "python-string-replace",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: ".replace()",
        desc: `Replaces occurrences of a specified substring with a new string.`,
        example: `print('Happy Day'.replace('Happy', 'Brilliant'))
# Brilliant Day`,
        tags: ["string methods", "manipulation"],
        difficulty: "beginner"
    },
    {
        id: "python-tuples",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "Tuples",
        desc: `An immutable (fixed) sequence used to store different types of data together. Defined using parentheses () and accessed via unpacking or indexing.`,
        example: `office = ('NHSM', 11, 'B1')
building, room, loc = office # Unpacking
print(office[0]) # Indexing`,
        tags: ["data structure", "tuples"],
        difficulty: "beginner"
    },
    {
        id: "python-lists",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "Lists",
        desc: `A mutable sequence used to store collections of data. Defined using square brackets []. Elements can be added, edited, or removed. Supports indexing (including negative indices like [-1] for the last element) and slicing.`,
        example: `my_list = ["apple", "banana", "cherry"]
print(my_list[-1]) # cherry
my_list[0:1] = ['grape', 'kiwi']`,
        tags: ["data structure", "lists"],
        difficulty: "beginner"
    },
    {
        id: "python-list-methods",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "List Methods (.insert, .append, .index)",
        desc: `.insert(pos, data) adds an item at a specific index. .append(data) adds an item to the end. .index(value) finds the position of an element.`,
        example: `parrot = ["blue", "red"]
parrot.append("USA")
parrot.insert(1, "DZ")
print(parrot.index("red"))`,
        tags: ["list methods", "manipulation"],
        difficulty: "beginner"
    },
    {
        id: "python-sets",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "Sets & Set Operators",
        desc: `An unordered collection of unique elements defined by curly braces {}. Supports mathematical operations: Union (|), Intersection (&), Difference (-), and Symmetric Difference (^).`,
        example: `A = {1, 2, 3}
B = {3, 4, 5}
print(A | B) # {1, 2, 3, 4, 5}
print(A & B) # {3}`,
        tags: ["data structure", "sets", "math"],
        difficulty: "intermediate"
    },
    {
        id: "python-set-methods",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "Set Methods",
        desc: `Object-oriented equivalents of set operators: .union(), .intersection(), .difference(), and .issubset() to check if one set is completely contained in another.`,
        example: `print(A.union(B))
print(A.intersection(B))
print(B.issubset(A)) # False`,
        tags: ["set methods", "math"],
        difficulty: "intermediate"
    },
    {
        id: "python-set-function",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "set()",
        desc: `A built-in function that converts a list, tuple, or string into a set. A quick way to find unique elements.`,
        example: `print(set([1, 2, 2, 3, 1])) # {1, 2, 3}
print(set("Banana")) # {'B', 'a', 'n'}`,
        tags: ["type conversion", "sets"],
        difficulty: "beginner"
    },
    {
        id: "python-dictionaries",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "Dictionaries",
        desc: `A mapping data type that consists of key-value pairs separated by colons inside curly braces {}. Elements are accessed using their corresponding keys instead of numeric indices.`,
        example: `dict_1 = {'apple': 3, 'orange': 4}
print(dict_1['apple']) # 3`,
        tags: ["data structure", "dictionaries", "mapping"],
        difficulty: "beginner"
    },
    {
        id: "python-dict-methods",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: ".keys() / .values()",
        desc: `Dictionary methods used to retrieve all the keys or all the values from a dictionary.`,
        example: `print(dict_1.keys())
print(dict_1.values())`,
        tags: ["dictionary methods", "keys", "values"],
        difficulty: "beginner"
    },
    {
        id: "ex-string-manipulation",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "Exercise: String Formatting and Manipulation",
        desc: `You are given a string \`sentence\`. First, split it into a list of words. Then, join those words back together using a hyphen \`-\`. Finally, replace the word 'bad' with 'good'.`,
        example: `sentence = "This is a bad day"
split_words = sentence.split()
joined_sentence = '-'.join(split_words)
final_sentence = joined_sentence.replace('bad', 'good')
print(final_sentence)`,
        tags: ["exercise", "strings", "manipulation"],
        difficulty: "beginner"
    },
    {
        id: "ex-list-operations",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "Exercise: Managing a List",
        desc: `You have a list of scores. Perform the following operations: 1) Append the score 95 to the end. 2) Insert the score 100 at the very beginning (index 0). 3) Find the index of the score 85 and print it.`,
        example: `scores = [85, 90, 78]
scores.append(95)
scores.insert(0, 100)
print(scores.index(85))`,
        tags: ["exercise", "lists", "methods"],
        difficulty: "beginner"
    },
    {
        id: "ex-set-uniques",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "Exercise: Finding Common Unique Elements",
        desc: `Given two lists with repeating numbers, convert them into sets to find their unique elements. Then, find and print the intersection (elements common to both sets).`,
        example: `list_a = [1, 2, 2, 3, 4, 4, 5]
list_b = [3, 4, 4, 5, 6, 7]
set_a = set(list_a)
set_b = set(list_b)
common_elements = set_a.intersection(set_b) # or set_a & set_b
print(common_elements)`,
        tags: ["exercise", "sets", "intersection"],
        difficulty: "intermediate"
    },
    {
        id: "ex-dictionary-lookup",
        chap: "lab2b",
        chapTitle: "Lab 02b: Variables & Data Types",
        func: "Exercise: Dictionary Operations",
        desc: `Create a dictionary called \`student\` with keys 'name' (value 'Alice') and 'age' (value 22). Print the student's age by accessing it via its key. Then, print all the keys of the dictionary.`,
        example: `student = {'name': 'Alice', 'age': 22}
print(student['age'])
print(student.keys())`,
        tags: ["exercise", "dictionaries", "keys"],
        difficulty: "beginner"
    }




];
// (End of new definitions – keep the existing closing bracket below)


// ==========================================
// GUIDED PRACTICE WORKOUTS SETUP (unchanged)
// ==========================================
const practiceWorkouts = [
        {
        id: "p_lab1_1_io",
        chap: "lab1",
        chapTitle: "Lab 01: Interactive IO Platform",
        title: "1. Welcome Message",
        badge: "Lab 01",
        instructions: `<p>Write a program that prints a welcome banner using a <strong>triple‑quoted string</strong> (not multiple print() calls). The banner should look exactly like this:</p>
<pre>=========================
   PYTHON LAB PLATFORM
=========================</pre>`,
        starter: `# Use a triple-quoted string and a single print()`,
        expected: "=========================\n   PYTHON LAB PLATFORM\n========================="
    },
    {
        id: "p_lab1_2_typecast",
        chap: "lab1",
        chapTitle: "Lab 01: Interactive IO Platform",
        title: "2. Type Casting Calculator",
        badge: "Lab 01",
        instructions: `<p>Read two numbers from input (given as strings <code>"12"</code> and <code>"3.5"</code>). Convert them to appropriate numeric types, then print:</p>
<ul>
  <li>The integer product of the first number and 2</li>
  <li>The float sum of the second number and 1.5</li>
</ul>
<p>Use <strong>explicit type casting</strong> with <code>int()</code> and <code>float()</code>.</p>`,
        starter: `num1_str = "12"
num2_str = "3.5"
# Your code here`,
        expected: "24\n5.0"
    },
    {
        id: "p_lab1_3_operators",
        chap: "lab1",
        chapTitle: "Lab 01: Arithmetic Operators Calculus",
        title: "3. Operator Mastery",
        badge: "Lab 01",
        instructions: `<p>Given <code>a = 17</code> and <code>b = 5</code>, compute and print the following on separate lines:</p>
<ol>
  <li>a raised to the power b (exponentiation)</li>
  <li>a floor-divided by b</li>
  <li>a modulo b</li>
</ol>
<p>Use the operators <code>**</code>, <code>//</code>, and <code>%</code>.</p>`,
        starter: `a = 17
b = 5
# Your code here`,
        expected: "1419857\n3\n2"
    },
    {
        id: "p_lab1_4_split_map",
        chap: "lab1",
        chapTitle: "Lab 01: Linear Coordinates Parsing",
        title: "4. Coordinate Parser",
        badge: "Lab 01",
        instructions: `<p>You have a string <code>"10.5,20.3,30.8"</code>. Convert it into a tuple of three floats named <code>coords</code> using <code>split()</code> and <code>map()</code> with <code>float</code>. Then print:</p>
<ul>
  <li>The second coordinate (index 1)</li>
  <li>The sum of all three coordinates</li>
</ul>
<p>Use <strong>tuple indexing</strong> and <code>sum()</code>.</p>`,
        starter: `data = "10.5,20.3,30.8"
# Your code here`,
        expected: "20.3\n61.6"
    },
    {
        id: "p_lab1_5_bonus",
        chap: "lab1",
        chapTitle: "Lab 01: Linear Coordinates Parsing",
        title: "5. Advanced Formatting Challenge",
        badge: "Lab 01",
        instructions: `<p>Given two points as strings <code>"3.2,7.8"</code> and <code>"5.5,2.1"</code>, convert them into tuples of floats. Then print a formatted table showing the x‑coordinates and y‑coordinates of both points exactly like this:</p>
<pre>Point A: x=3.20, y=7.80
Point B: x=5.50, y=2.10
Distance: 6.16</pre>
<p>The distance should be computed using <code>((x2-x1)**2 + (y2-y1)**2)**0.5</code> and printed with <strong>two decimal places</strong> using <code>f"{value:.2f}"</code>.</p>`,
        starter: `point_a_str = "3.2,7.8"
point_b_str = "5.5,2.1"
# Your code here`,
        expected: "Point A: x=3.20, y=7.80\nPoint B: x=5.50, y=2.10\nDistance: 6.16"
    },


        {
        id: "p_lab2_1_dictionary",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        title: "1. Build a Student Record",
        badge: "Lab 02",
        instructions: `<p>Create a dictionary <code>student</code> with keys <code>"name"</code>, <code>"age"</code>, and <code>"major"</code> and values <code>"Lina"</code>, <code>21</code>, and <code>"Computer Science"</code>. Then:</p>
<ul>
  <li>Print all the keys</li>
  <li>Print the value for <code>"major"</code> using <strong>safe access</strong> (<code>.get()</code>)</li>
  <li>Update the dictionary by adding a new key <code>"gpa"</code> with value <code>3.8</code></li>
  <li>Print the total number of keys using <code>len()</code></li>
</ul>`,
        starter: `# Your code here`,
        expected: "dict_keys(['name', 'age', 'major'])\nComputer Science\n4"
    },
    {
        id: "p_lab2_2_sets",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        title: "2. Set Operations",
        badge: "Lab 02",
        instructions: `<p>Given two lists <code>list_a = [1,2,2,3,4]</code> and <code>list_b = [3,4,5,6]</code>, convert them into sets. Then print:</p>
<ul>
  <li>The union of the two sets</li>
  <li>The intersection of the two sets</li>
  <li>The elements that are in set A but not in set B (difference)</li>
</ul>
<p>Use set operators (<code>|</code>, <code>&</code>, <code>-</code>) or methods.</p>`,
        starter: `list_a = [1,2,2,3,4]
list_b = [3,4,5,6]
# Your code here`,
        expected: "{1, 2, 3, 4, 5, 6}\n{3, 4}\n{1, 2}"
    },
    {
        id: "p_lab2_3_typecast",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        title: "3. Type Detective",
        badge: "Lab 02",
        instructions: `<p>You have the following variables:</p>
<pre>a = "3.14"
b = 100
c = [1,2,3]
d = {"key": "value"}</pre>
<p>Print the <strong>type</strong> of each variable on separate lines using <code>type()</code>.</p>`,
        starter: `a = "3.14"
b = 100
c = [1,2,3]
d = {"key": "value"}
# Your code here`,
        expected: "<class 'str'>\n<class 'int'>\n<class 'list'>\n<class 'dict'>"
    },
    {
        id: "p_lab2_4_strings",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        title: "4. String Transformer",
        badge: "Lab 02",
        instructions: `<p>Given the string <code>raw = "  Hello, Python World!  "</code>:</p>
<ol>
  <li>Remove extra whitespace from both ends using <code>.strip()</code></li>
  <li>Convert the entire string to uppercase</li>
  <li>Split it into a list of words</li>
  <li>Print the number of words using <code>len()</code></li>
</ol>`,
        starter: `raw = "  Hello, Python World!  "
# Your code here`,
        expected: "3"
    },
    {
        id: "p_lab2_5_listops",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        title: "5. List Master",
        badge: "Lab 02",
        instructions: `<p>Start with an empty list <code>nums = []</code>.</p>
<ol>
  <li>Append the numbers <code>10</code> and <code>20</code></li>
  <li>Insert <code>15</code> at index 1</li>
  <li>Sort the list in ascending order</li>
  <li>Print the final list</li>
</ol>
<p>Use <code>.append()</code>, <code>.insert()</code>, and <code>.sort()</code>.</p>`,
        starter: `nums = []
# Your code here`,
        expected: "[10, 15, 20]"
    },

        {
        id: "p_lab3_1_fizzbuzz",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        title: "1. FizzBuzz Classic",
        badge: "Lab 03",
        instructions: `<p>Write a program that iterates through numbers 1 to 20 (inclusive). For each number:</p>
<ul>
  <li>If the number is divisible by both 3 and 5, print <strong>"FizzBuzz"</strong></li>
  <li>If it is divisible by only 3, print <strong>"Fizz"</strong></li>
  <li>If it is divisible by only 5, print <strong>"Buzz"</strong></li>
  <li>Otherwise, print the number itself</li>
</ul>
<p>Use a <code>for</code> loop and <code>if/elif/else</code>.</p>`,
        starter: `# Your code here`,
        expected: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz"
    },
    {
        id: "p_lab3_2_factorial",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        title: "2. Factorial Calculator",
        badge: "Lab 03",
        instructions: `<p>Compute the factorial of a number using a <strong>while loop</strong>. You are given <code>n = 6</code>. The factorial of n is n * (n-1) * ... * 1. Print only the final result.</p>`,
        starter: `n = 6
# Your code here`,
        expected: "720"
    },
    {
        id: "p_lab3_3_filter_map",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        title: "3. Functional Filter & Map",
        badge: "Lab 03",
        instructions: `<p>Given a list <code>nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</code>:</p>
<ol>
  <li>Use <code>filter()</code> with a <strong>lambda</strong> to keep only even numbers</li>
  <li>Use <code>map()</code> to square each remaining number</li>
  <li>Convert the result to a list and print it</li>
</ol>`,
        starter: `nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# Your code here`,
        expected: "[4, 16, 36, 64, 100]"
    },
    {
        id: "p_lab3_4_zipped_sort",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        title: "4. Zipped & Sorted",
        badge: "Lab 03",
        instructions: `<p>You have two lists:</p>
<pre>names = ["Alice", "Bob", "Charlie", "Diana"]
scores = [85, 92, 78, 88]</pre>
<p>Pair them using <code>zip()</code>, then <strong>sort the pairs by score in descending order</strong> (highest first). Finally, print each pair in the format <code>Name: Score</code> on separate lines.</p>
<p>Use <code>sorted()</code> with a <code>key</code> parameter.</p>`,
        starter: `names = ["Alice", "Bob", "Charlie", "Diana"]
scores = [85, 92, 78, 88]
# Your code here`,
        expected: "Bob: 92\nDiana: 88\nAlice: 85\nCharlie: 78"
    },
    {
        id: "p_lab3_5_break_continue",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        title: "5. Break & Continue Challenge",
        badge: "Lab 03",
        instructions: `<p>Iterate through numbers 1 to 15. Apply these rules:</p>
<ul>
  <li>Skip any number that is a multiple of 4 (<code>continue</code>)</li>
  <li>If a number is a perfect square (<code>sqrt(n)</code> is integer), print <strong>"Square"</strong> and <code>break</code> (stop loop)</li>
  <li>Otherwise, print the number</li>
</ul>
<p>You'll need <code>import math</code> and use <code>math.sqrt()</code>. Check if the square root is an integer using <code>.is_integer()</code>.</p>
<p>Print each output on a new line.</p>`,
        starter: `import math
# Your code here`,
        expected: "1\nSquare"
    },

        {
        id: "p_lab4_1_arange_linspace",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        title: "1. Array Generators",
        badge: "Lab 04",
        instructions: `<p>Use NumPy to create two arrays and print them:</p>
<ol>
  <li><strong>arr1:</strong> even numbers from 0 up to (but not including) 14 using <code>np.arange()</code></li>
  <li><strong>arr2:</strong> exactly 6 equally spaced numbers between 0 and 1 inclusive using <code>np.linspace()</code></li>
</ol>
<p>Print each array on its own line.</p>`,
        starter: `import numpy as np

# Your code here`,
        expected: "[ 0  2  4  6  8 10 12]\n[0.  0.2 0.4 0.6 0.8 1. ]"
    },
    {
        id: "p_lab4_2_zeros_ones_full",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        title: "2. Matrix Initialization",
        badge: "Lab 04",
        instructions: `<p>Create the following arrays using NumPy:</p>
<ul>
  <li>A 2x3 matrix of zeros, stored as <code>z</code></li>
  <li>A 3x2 matrix of ones, stored as <code>o</code></li>
  <li>A 2x2 matrix where every element is 7, stored as <code>s</code></li>
</ul>
<p>Print <code>z</code>, <code>o</code>, and <code>s</code> each on a new line. Use <code>np.zeros()</code>, <code>np.ones()</code>, and <code>np.full()</code>.</p>`,
        starter: `import numpy as np

# Your code here`,
        expected: "[[0. 0. 0.]\n [0. 0. 0.]]\n[[1. 1.]\n [1. 1.]\n [1. 1.]]\n[[7 7]\n [7 7]]"
    },
    {
        id: "p_lab4_3_reshape_transpose",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        title: "3. Reshape & Transpose",
        badge: "Lab 04",
        instructions: `<p>Start with a 1D array <code>arr = np.arange(1, 13)</code> (numbers 1 through 12).</p>
<ol>
  <li>Reshape it into a 3x4 matrix. Print its shape.</li>
  <li>Flatten the matrix back to 1D and print it.</li>
  <li>Transpose the 3x4 matrix (so it becomes 4x3) and print the result.</li>
</ol>`,
        starter: `import numpy as np
arr = np.arange(1, 13)

# Your code here`,
        expected: "(3, 4)\n[ 1  2  3  4  5  6  7  8  9 10 11 12]\n[[ 1  5  9]\n [ 2  6 10]\n [ 3  7 11]\n [ 4  8 12]]"
    },
    {
        id: "p_lab4_4_linear_algebra",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        title: "4. Linear Algebra Mini-Suite",
        badge: "Lab 04",
        instructions: `<p>Given the matrix <strong>A</strong> and vector <strong>b</strong>:</p>
<pre>A = [[2, 1],
     [1, 2]]
b = [4, 5]</pre>
<p>Compute and print the following:</p>
<ol>
  <li>The determinant of <strong>A</strong></li>
  <li>The inverse of <strong>A</strong></li>
  <li>The solution <strong>x</strong> to the linear system <strong>A @ x = b</strong></li>
</ol>
<p>Use <code>np.linalg.det()</code>, <code>np.linalg.inv()</code>, and <code>np.linalg.solve()</code>.</p>`,
        starter: `import numpy as np
A = np.array([[2, 1], [1, 2]])
b = np.array([4, 5])

# Your code here`,
        expected: "3.0\n[[ 0.66666667 -0.33333333]\n [-0.33333333  0.66666667]]\n[1. 2.]"
    },
    {
        id: "p_lab4_5_random_reduce",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        title: "5. Random & Reductions",
        badge: "Lab 04",
        instructions: `<p>Set the random seed to <code>42</code> using <code>np.random.seed(42)</code>. Then:</p>
<ol>
  <li>Generate a 2x3 array of random floats in [0,1) using <code>np.random.rand()</code></li>
  <li>Print the sum of all elements in that array</li>
  <li>Generate a 2x3 array of random samples from a standard normal distribution using <code>np.random.randn()</code></li>
  <li>Print the mean of each row (axis=1) of that normal array</li>
</ol>
<p>Use <code>np.sum()</code> and <code>np.mean()</code> with the <code>axis</code> parameter.</p>`,
        starter: `import numpy as np
np.random.seed(42)

# Your code here`,
        expected: "3.601622467644356\n[ 0.75463036 -0.01727025]"
    },
        {
        id: "p_lab5_1_basic_line",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        title: "1. Basic Line Plot",
        badge: "Lab 05",
        instructions: `<p>Plot the function <strong>y = x²</strong> from x = -10 to 10 using 100 points (<code>np.linspace</code>).</p>
<ul>
  <li>Use a <strong>dashed red line</strong> (<code>'r--'</code>)</li>
  <li>Set the figure size to <strong>(8, 4)</strong></li>
  <li>Add labels: <strong>"X Axis"</strong>, <strong>"Y Axis"</strong></li>
  <li>Add a title: <strong>"y = x^2"</strong></li>
  <li>Add a legend with the label <strong>"x^2"</strong></li>
</ul>
<p><strong>Before</strong> <code>plt.show()</code>, print the figure size exactly as: <code>Figure size: 8x4</code></p>
<p>Use <code>plt.figure(figsize=(8,4))</code> and <code>print("Figure size: 8x4")</code>.</p>`,
        starter: `import numpy as np
import matplotlib.pyplot as plt

# Your code here`,
        expected: "Figure size: 8x4"
    },
    {
        id: "p_lab5_2_multiple_lines",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        title: "2. Multiple Functions",
        badge: "Lab 05",
        instructions: `<p>Plot the following three functions on the <strong>same axes</strong> from x = 0 to 15 (100 points):</p>
<ul>
  <li><strong>y = sin(x)</strong> in blue solid line, label "sin"</li>
  <li><strong>y = cos(x)</strong> in red dashed line, label "cos"</li>
  <li><strong>y = sin(x) + cos(x)</strong> in green dotted line, label "sum"</li>
</ul>
<p>Add a legend, labels for the axes ("X", "Y"), and the title "Trigonometric Functions".</p>
<p><strong>Before</strong> <code>plt.show()</code>, print the number of lines you created: <code>3</code></p>`,
        starter: `import numpy as np
import matplotlib.pyplot as plt

# Your code here`,
        expected: "3"
    },
    {
        id: "p_lab5_3_subplots",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        title: "3. Subplots Challenge",
        badge: "Lab 05",
        instructions: `<p>Create a <strong>2 rows × 1 column</strong> subplot layout using <code>plt.subplots(2, 1, figsize=(6, 8))</code>.</p>
<ul>
  <li><strong>Top plot:</strong> a bar chart of categories ['A', 'B', 'C'] with values [23, 45, 56]. Title: "Bar Chart"</li>
  <li><strong>Bottom plot:</strong> a scatter plot of 30 random x and y values (use <code>np.random.rand(30)</code>). Title: "Scatter Plot"</li>
</ul>
<p>After creating both subplots, print the y-axis limits of the <strong>top</strong> subplot (the bar chart) using: <code>print(ax1.get_ylim())</code>. The expected output is the default limits tuple.</p>`,
        starter: `import numpy as np
import matplotlib.pyplot as plt

fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(6, 8))

# Your code here

# Print y-limits of the top subplot before tight_layout and show
print(ax1.get_ylim())`,
        expected: "(0.0, 56.0)"   // default ylim for bar chart with max value 56
    },
    {
        id: "p_lab5_4_histogram_stats",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        title: "4. Histogram with Statistics",
        badge: "Lab 05",
        instructions: `<p>Generate 1000 random numbers from a <strong>normal distribution</strong> with mean=5 and std=1 using <code>np.random.randn()*1 + 5</code>.</p>
<ol>
  <li>Plot a histogram of the data with <strong>30 bins</strong>, color <strong>purple</strong>, and <strong>density=True</strong></li>
  <li>Add a title "Normal Distribution"</li>
  <li><strong>Before</strong> <code>plt.show()</code>, print the mean and standard deviation of the data, each rounded to 2 decimal places, like: <code>Mean: 5.00, Std: 1.00</code></li>
</ol>
<p>The actual mean/std will vary, but the expected output is fixed because we'll use a seed. Set the random seed to <code>42</code> at the top.</p>`,
        starter: `import numpy as np
import matplotlib.pyplot as plt
np.random.seed(42)

# Your code here`,
        expected: "Mean: 4.99, Std: 0.99"   // with seed 42 the mean is ~4.99, std ~0.99 (actual values: mean=4.991..., std=0.986...)
    },
    {
        id: "p_lab5_5_contour_advanced",
        chap: "lab5",
        chapTitle: "Lab 05: Matplotlib",
        title: "5. Advanced Contour Plot",
        badge: "Lab 05",
        instructions: `<p>Create a <strong>filled contour plot</strong> of the function <code>z = sin(x) * cos(y)</code> over the domain x = [-5, 5] and y = [-5, 5] using 100 points each.</p>
<ul>
  <li>Use <code>plt.contourf(X, Y, Z, levels=20, cmap='RdYlBu')</code></li>
  <li>Add a colorbar</li>
  <li>Add a title "Contour: sin(x)*cos(y)"</li>
  <li>Set the x‑label and y‑label to "X" and "Y"</li>
</ul>
<p>Before <code>plt.show()</code>, print the <strong>shape</strong> of the <code>Z</code> array, like: <code>Shape: (100, 100)</code></p>`,
        starter: `import numpy as np
import matplotlib.pyplot as plt

# Your code here`,
        expected: "Shape: (100, 100)"
    },


        {
        id: "p_lab6_1_simplify",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        title: "1. Symbolic Simplification",
        badge: "Lab 06",
        instructions: `<p>Simplify the following expression symbolically using SymPy:</p>
<pre>(x**2 + 2*x + 1) / (x + 1)</pre>
<p>Print the simplified result.</p>`,
        starter: `import sympy as sp
x = sp.symbols('x')
expr = (x**2 + 2*x + 1)/(x + 1)

# Your code here`,
        expected: "x + 1"
    },
    {
        id: "p_lab6_2_subs",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        title: "2. Substitution & Evaluation",
        badge: "Lab 06",
        instructions: `<p>Define the expression <code>expr = x**3 + 2*x + 1</code>. Substitute <code>x = 2</code> and print the numeric result.</p>`,
        starter: `import sympy as sp
x = sp.symbols('x')
expr = x**3 + 2*x + 1

# Your code here`,
        expected: "13"
    },
    {
        id: "p_lab6_3_solve_system",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        title: "3. Solving a Linear System",
        badge: "Lab 06",
        instructions: `<p>Solve the following system of equations symbolically:</p>
<pre>x + y = 5
x - y = 1</pre>
<p>Print the solution dictionary returned by <code>sp.solve()</code>.</p>`,
        starter: `import sympy as sp
x, y = sp.symbols('x y')
eq1 = sp.Eq(x + y, 5)
eq2 = sp.Eq(x - y, 1)

# Your code here`,
        expected: "{x: 3, y: 2}"
    },
    {
        id: "p_lab6_4_calculus",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        title: "4. Derivative & Integral",
        badge: "Lab 06",
        instructions: `<p>Perform basic calculus on <code>f(x) = sin(x)</code>:</p>
<ol>
  <li>Compute the first derivative (print it)</li>
  <li>Compute the definite integral from 0 to π (print the result)</li>
</ol>`,
        starter: `import sympy as sp
x = sp.symbols('x')
f = sp.sin(x)

# Your code here`,
        expected: "cos(x)\n2"
    },
    {
        id: "p_lab6_5_matrix",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        title: "5. Matrix Operations",
        badge: "Lab 06",
        instructions: `<p>Given the matrix:</p>
<pre>M = [[2, 1],
     [1, 2]]</pre>
<p>Compute and print the following on separate lines:</p>
<ol>
  <li>The determinant of M</li>
  <li>The trace of M (sum of diagonal elements)</li>
  <li>The determinant of the inverse of M</li>
</ol>
<p>Use <code>M.det()</code>, <code>M.trace()</code>, and <code>M.inv().det()</code>.</p>`,
        starter: `import sympy as sp
M = sp.Matrix([[2, 1],
               [1, 2]])

# Your code here`,
        expected: "3\n4\n1/3"
    },
        // --- Wind Statistics Practice ---
    {
        id: "p_wind_1_load",
        chap: "numpy-wind",
        chapTitle: "LabWork NumPy — Wind Statistics in Algeria",
        title: "1. Load & Inspect Synthetic Data",
        badge: "Wind Lab",
        instructions: `<p>The following starter code creates a small synthetic dataset with <strong>10 days</strong> of wind measurements for <strong>3 stations</strong>. The data array has columns: year, month, day, speed1, speed2, speed3. Complete the code to:</p>
<ol>
  <li>Separate the dates (first 3 columns) and speeds (remaining columns).</li>
  <li>Print the <strong>shape</strong> and <strong>data type</strong> of the speeds array on separate lines.</li>
</ol>`,
        starter: `import numpy as np
np.random.seed(42)
# Synthetic data: 10 rows, 6 columns (year, month, day, s1, s2, s3)
data = np.zeros((10, 6))
data[:, 0] = 2020
data[:, 1] = np.arange(1, 11)
data[:, 2] = 15
data[:, 3:] = np.random.uniform(0, 30, (10, 3))

# Your code here
`,
        expected: "(10, 3)\nfloat64"
    },
    {
        id: "p_wind_2_global",
        chap: "numpy-wind",
        chapTitle: "LabWork NumPy — Wind Statistics in Algeria",
        title: "2. Global Statistics",
        badge: "Wind Lab",
        instructions: `<p>Using the same dataset as above (provided in the starter code), compute the following <strong>global</strong> statistics of all wind speeds (all stations, all days):</p>
<ul>
  <li>Minimum wind speed</li>
  <li>Maximum wind speed</li>
  <li>Mean wind speed (rounded to 2 decimals)</li>
</ul>
<p>Print each value on a separate line.</p>`,
        starter: `import numpy as np
np.random.seed(42)
data = np.zeros((10, 6))
data[:, 0] = 2020
data[:, 1] = np.arange(1, 11)
data[:, 2] = 15
data[:, 3:] = np.random.uniform(0, 30, (10, 3))
speeds = data[:, 3:]

# Your code here
`,
        expected: "0.6443005083914907\n29.59906315085132\n14.85"
    },
    {
        id: "p_wind_3_per_station",
        chap: "numpy-wind",
        chapTitle: "LabWork NumPy — Wind Statistics in Algeria",
        title: "3. Mean per Station (Column-wise)",
        badge: "Wind Lab",
        instructions: `<p>Using the same speeds array (10 days × 3 stations), calculate the <strong>mean wind speed for each station</strong> (i.e., average over all 10 days). Print the resulting array on a single line.</p>`,
        starter: `import numpy as np
np.random.seed(42)
data = np.zeros((10, 6))
data[:, 0] = 2020
data[:, 1] = np.arange(1, 11)
data[:, 2] = 15
data[:, 3:] = np.random.uniform(0, 30, (10, 3))
speeds = data[:, 3:]

# Your code here
`,
        expected: "[12.59217798 15.57328162 16.38059164]"
    },
    {
        id: "p_wind_4_argmax",
        chap: "numpy-wind",
        chapTitle: "LabWork NumPy — Wind Statistics in Algeria",
        title: "4. Windiest Station per Day",
        badge: "Wind Lab",
        instructions: `<p>For each day, find the <strong>index of the station</strong> (0, 1, or 2) that recorded the highest wind speed. Print the resulting array of indices on a single line.</p>
<p>Use <code>np.argmax()</code> with the correct axis.</p>`,
        starter: `import numpy as np
np.random.seed(42)
data = np.zeros((10, 6))
data[:, 0] = 2020
data[:, 1] = np.arange(1, 11)
data[:, 2] = 15
data[:, 3:] = np.random.uniform(0, 30, (10, 3))
speeds = data[:, 3:]

# Your code here
`,
        expected: "[2 0 2 1 0 2 2 1 1 0]"
    },
    {
        id: "p_wind_5_summer_mask",
        chap: "numpy-wind",
        chapTitle: "LabWork NumPy — Wind Statistics in Algeria",
        title: "5. Summer Wind Speed Filter",
        badge: "Wind Lab",
        instructions: `<p>Build a boolean mask to select only the days that fall in <strong>summer months (June–September)</strong>. The month is stored in column index 1 of the original data array (values 1 to 10).</p>
<p>After applying the mask to the speeds array, print the <strong>mean wind speed</strong> of those summer days, rounded to 2 decimal places.</p>`,
        starter: `import numpy as np
np.random.seed(42)
data = np.zeros((10, 6))
data[:, 0] = 2020
data[:, 1] = np.arange(1, 11)   # months 1 to 10
data[:, 2] = 15
data[:, 3:] = np.random.uniform(0, 30, (10, 3))
speeds = data[:, 3:]
dates = data[:, :3]

# Your code here
`,
        expected: "16.74"
    },
        {
        id: "p_lab5b_1_try_except",
        chap: "lab5b",
        chapTitle: "Lab 05b: Exception Handling Basics",
        title: "1. Catch Division by Zero",
        badge: "Lab 05b",
        instructions: `<p>Complete the code so that if <strong>b</strong> is zero, the program prints <strong>"Error caught"</strong> instead of crashing. Use a <code>try/except</code> block.</p>`,
        starter: `a = 10
b = 0

# Your code here`,
        expected: "Error caught"
    },
    {
        id: "p_lab5b_2_multiple_exceptions",
        chap: "lab5b",
        chapTitle: "Lab 05b: Exception Handling Basics",
        title: "2. Handle ValueError and IndexError",
        badge: "Lab 05b",
        instructions: `<p>Given <code>a = "hello"</code> and <code>e = [1, 2, 3]</code>, write a single <code>try</code> block that:</p>
<ol>
  <li>Converts <code>a</code> to an integer</li>
  <li>Accesses <code>e[5]</code></li>
</ol>
<p>If a <strong>ValueError</strong> occurs, print <strong>"ValueError"</strong>. If an <strong>IndexError</strong> occurs, print <strong>"IndexError"</strong>. (Only one of these will actually happen – you still need both <code>except</code> blocks.)</p>`,
        starter: `a = "hello"
e = [1, 2, 3]

# Your code here`,
        expected: "ValueError"
    },
    {
        id: "p_lab5b_3_else_finally",
        chap: "lab5b",
        chapTitle: "Lab 05b: Exception Handling Basics",
        title: "3. else and finally Blocks",
        badge: "Lab 05b",
        instructions: `<p>Write a <code>try/except/else/finally</code> block that divides <strong>10 by 2</strong>. Print the result if successful, and always print <strong>"Done"</strong> in the <code>finally</code> block. The expected output is:</p>
<pre>Success
5.0
Done</pre>
<p>Use <code>print("Success")</code> in the <code>else</code> block, then print the result, and <code>print("Done")</code> in <code>finally</code>.</p>`,
        starter: `a = 10
b = 2

# Your code here`,
        expected: "Success\n5.0\nDone"
    },
    {
        id: "p_lab5b_4_raise",
        chap: "lab5b",
        chapTitle: "Lab 05b: Exception Handling Basics",
        title: "4. Raise a Custom Error",
        badge: "Lab 05b",
        instructions: `<p>Define a function <code>validate_age(age)</code> that raises a <strong>ValueError</strong> with the message <strong>"negative age is not allowed"</strong> if <code>age</code> is less than 0. Otherwise, return <strong>True</strong>.</p>
<p>Then, in the main code, try to validate the age <strong>-5</strong>. If an error is raised, print the exception message (the text inside the ValueError).</p>`,
        starter: `# Your code here
def validate_age(age):
    `,
        expected: "negative age is not allowed"
    },
    {
        id: "p_lab5b_5_loop_safe_division",
        chap: "lab5b",
        chapTitle: "Lab 05b: Exception Handling Basics",
        title: "5. Safe Division in a Loop",
        badge: "Lab 05b",
        instructions: `<p>You have a list <code>numbers = [10, 0, 5]</code>. Write a loop that divides <strong>100 by each number</strong>. If a <strong>ZeroDivisionError</strong> occurs, print <strong>"Cannot divide by zero"</strong>. Otherwise, print the result.</p>
<p>Expected output:</p>
<pre>10.0
Cannot divide by zero
20.0</pre>
<p>Use a <code>for</code> loop and a <code>try/except</code> inside it.</p>`,
        starter: `numbers = [10, 0, 5]

# Your code here`,
        expected: "10.0\nCannot divide by zero\n20.0"
    }
];
