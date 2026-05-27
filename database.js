
const definitionDb = [
    // --- LAB 01: GETTING STARTED ---
    {
        id: "print_basics",
        chap: "lab1",
        chapTitle: "Lab 01: Interactive IO Platform",
        func: "print()",
        desc: "Outputs custom formatted strings, text variables, or calculated mathematical results to the standard terminal output window.",
        example: "print(\"The area of the triangle is:\", S)"
    },
    {
        id: "triple_quotes",
        chap: "lab1",
        chapTitle: "Lab 01: Interactive IO Platform",
        func: "Triple-Quoted Strings (\"\"\"...\"\"\")",
        desc: "Defines multiline string blocks. Highly useful for displaying structured text (like info cards) without using manual newline '\\n' character escapes.",
        example: "print(\"\"\"\\nPersonal Info\\nName: Houssam\\nAge: 21\\n\"\"\")"
    },
    {
        id: "input_basics",
        chap: "lab1",
        chapTitle: "Lab 01: Interactive IO Platform",
        func: "input()",
        desc: "Interrupts code execution to wait for user terminal input. Note: Always returns captured input values as a plain text string.",
        example: "name = input(\"Enter a name: \")"
    },
    {
        id: "float_cast",
        chap: "lab1",
        chapTitle: "Lab 01: Interactive IO Platform",
        func: "float()",
        desc: "Explicitly converts (type-casts) compatible strings or integers into decimal floating-point representation values.",
        example: "decimal_val = float(\"120.5\")\nprint(decimal_val) # Outputs: 120.5"
    },
    {
        id: "int_cast",
        chap: "lab1",
        chapTitle: "Lab 01: Interactive IO Platform",
        func: "int()",
        desc: "Explicitly converts floating-point decimals or integer-like strings into clean whole numbers, discarding any decimal fraction.",
        example: "whole_num = int(\"21\")\nprint(whole_num) # Outputs: 21"
    },
    {
        id: "str_cast",
        chap: "lab1",
        chapTitle: "Lab 01: Interactive IO Platform",
        func: "str()",
        desc: "Converts numbers or sequence types into their printable string representation for concatenation operations.",
        example: "age_str = str(21)\nprint(\"Age is: \" + age_str)"
    },
    {
        id: "exponent_op",
        chap: "lab1",
        chapTitle: "Lab 01: Arithmetic Operators Calculus",
        func: "Exponentiation Operator (**)",
        desc: "Raises a numeric base on the left to the power of the exponent on the right.",
        example: "b = 10**6 # Computes 1,000,000\nprint(b)"
    },
    {
        id: "floor_div",
        chap: "lab1",
        chapTitle: "Lab 01: Arithmetic Operators Calculus",
        func: "Floor Division (//)",
        desc: "Divides the left operand by the right operand and rounds the result down to the nearest lower integer value.",
        example: "result = 7 // 3 # Evaluates to 2\nprint(result)"
    },
    {
        id: "modulo_op",
        chap: "lab1",
        chapTitle: "Lab 01: Arithmetic Operators Calculus",
        func: "Modulo Operator (%)",
        desc: "Divides the left operand by the right operand and returns exclusively the remaining value (remainder).",
        example: "remainder = 7 % 3 # Evaluates to 1\nprint(remainder)"
    },
    {
        id: "map_func",
        chap: "lab1",
        chapTitle: "Lab 01: Linear Coordinates Parsing",
        func: "map()",
        desc: "Applies a specified target converter function (like float or int) sequentially to every individual item inside an iterable collection.",
        example: "numbers = list(map(int, ['1', '2', '3']))\nprint(numbers) # Outputs: [1, 2, 3]"
    },
    {
        id: "split_method",
        chap: "lab1",
        chapTitle: "Lab 01: Linear Coordinates Parsing",
        func: ".split()",
        desc: "Splits a continuous text string into individual list items based on a designated character separator (delimiter). Default is space.",
        example: "coords = \"1.0,2.0\".split(',')\nprint(coords) # Outputs: ['1.0', '2.0']"
    },
    {
        id: "tuple_index",
        chap: "lab1",
        chapTitle: "Lab 01: Linear Coordinates Parsing",
        func: "Tuple Indexing",
        desc: "Accesses items inside immutable ordered lists (tuples) using zero-based sequence brackets.",
        example: "a = (3, 4)\nx_coord = a[0] # Yields 3\ny_coord = a[1]"
    },

    // --- LAB 02: VARIABLES & DICTIONARIES ---
    {
        id: "type_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: "type(obj)",
        desc: "Returns the explicit structural data type layout of the given object (e.g., str, float, int, list, dict).",
        example: "val = 120.5\nprint(type(val))  # Outputs: <class 'float'>"
    },
    {
        id: "float_func_l2",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: "float(x)",
        desc: "Converts/type-casts a compatible value (like a numeric string or an integer) into a floating-point decimal number.",
        example: "base_val = float(\"100\")\nprint(base_val)  # Outputs: 100.0"
    },
    {
        id: "len_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: "len(obj)",
        desc: "Returns the total item count or sequence length of an object like a string, list, or dictionary mapping.",
        example: "stations = [\"ALG\", \"ORA\", \"CON\"]\nprint(len(stations))  # Outputs: 3"
    },
    {
        id: "list_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: "list(obj)",
        desc: "Converts an iterable collection or sequence object (like a string, tuple, or set) into a standard indexable mutable list.",
        example: "coords_tuple = (3, 4)\nprint(list(coords_tuple))  # Outputs: [3, 4]"
    },
    {
        id: "set_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: "set(iterable)",
        desc: "Transforms a collection into a mathematical set containing only unique elements, automatically filtering duplicates.",
        example: "raw_data = [1, 2, 2, 3]\nprint(set(raw_data))  # Outputs: {1, 2, 3}"
    },
    {
        id: "math_sin",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: "math.sin(x)",
        desc: "Calculates the mathematical trigonometric sine of x. Requires executing an 'import math' declaration first; input x must be in radians.",
        example: "import math\nprint(math.sin(math.pi / 2))  # Outputs: 1.0"
    },
    {
        id: "lower_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".lower()",
        desc: "Converts all uppercase alphabet characters within a target string into their lowercase equivalents.",
        example: "city = \"ALGER\"\nprint(city.lower())  # Outputs: alger"
    },
    {
        id: "upper_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".upper()",
        desc: "Converts all lowercase alphabet characters within a target string into their uppercase equivalents.",
        example: "region = \"sahara\"\nprint(region.upper())  # Outputs: SAHARA"
    },
    {
        id: "split_func_l2",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".split(separator)",
        desc: "Breaks a string into a list of smaller substrings based on a specific separator delimiter pattern.",
        example: "line = \"ALG,ORA,CON\"\nprint(line.split(\",\"))  # ['ALG', 'ORA', 'CON']"
    },
    {
        id: "insert_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".insert(index, element)",
        desc: "Inserts a new element at a specific index position in a list, shifting all subsequent elements down to the right.",
        example: "nums = [10, 30]\nnums.insert(1, 20)\nprint(nums)  # [10, 20, 30]"
    },
    {
        id: "append_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".append(element)",
        desc: "Appends a new target item or variable entry directly to the absolute end of the target list sequence inline.",
        example: "stack = [1, 2]\nstack.append(3)\nprint(stack)  # [1, 2, 3]"
    },
    {
        id: "sort_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".sort()",
        desc: "Permanently sorts items inside a mutable list into ascending order (numerical or alphabetical) inline.",
        example: "un = [3, 1, 2]\nun.sort()\nprint(un)  # [1, 2, 3]"
    },
    {
        id: "union_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".union(other_set)",
        desc: "Combines items, returning a new set containing all unique elements aggregated from both intersecting sets.",
        example: "print({1, 2}.union({2, 3}))  # Outputs: {1, 2, 3}"
    },
    {
        id: "intersection_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".intersection(other_set)",
        desc: "Returns a new set filtering and keeping exclusively elements that exist concurrently inside both source sets.",
        example: "print({1, 2}.intersection({2, 3}))  # Outputs: {2}"
    },
    {
        id: "difference_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".difference(other_set)",
        desc: "Isolates contents, returning a fresh set with elements present in the first set but completely absent from the second set.",
        example: "print({1, 2}.difference({2, 3}))  # Outputs: {1}"
    },
    {
        id: "keys_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".keys()",
        desc: "Returns a dynamic view iterable object containing all structural keys present in a target mapping dictionary.",
        example: "client = {\"name\": \"Hocine\", \"age\": 21}\nprint(client.keys())"
    },
    {
        id: "update_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".update({key: value})",
        desc: "Adds new key-value elements directly to a dictionary, or overwrites existing data records if matching keys are found.",
        example: "Adic = {\"name\": \"Alice\"}\nAdic.update({\"major\": \"Engineering\", \"age\": 22})"
    },
    {
        id: "get_func",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: ".get(key)",
        desc: "Retrieves mapped values safely. If a requested key is absent, it securely falls back to returning a default parameter instead of a KeyError crash.",
        example: "Adic = {\"name\": \"Alice\"}\nprint(Adic.get(\"gpa\", \"Not available\"))"
    },
    {
        id: "whos_magic",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: "%whos",
        desc: "Jupyter Notebook shell utility command. Displays an organized summary table layout of all active computational variables assigned in memory.",
        example: "# Run in a Jupyter Notebook code cell:\n%whos"
    },
    {
        id: "reset_magic",
        chap: "lab2",
        chapTitle: "Lab 02: Variables & Dictionaries",
        func: "%reset",
        desc: "Clears the entire active variable registry from the interactive kernel environment's global memory footprint to reset execution spaces.",
        example: "# Run in a Jupyter Notebook cell to clear memory:\n%reset -f"
    },

    // --- LAB 03: ITERATIONS & CONTROL FLOWS ---
    {
        id: "conditional_branching",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "if / elif / else",
        desc: "Executes targeted code blocks conditionally by evaluating sequential boolean logical evaluations.",
        example: "if score >= 90:\n    grade = 'A'\nelif score >= 75:\n    grade = 'B'\nelse:\n    grade = 'F'"
    },
    {
        id: "range_func_l3",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "range(start, stop, step)",
        desc: "Generates an immutable arithmetic sequence of integers up to (but not including) the stop limit. Heavily optimized to run counted loops.",
        example: "for i in range(1, 10, 2):\n    print(i)  # Outputs: 1, 3, 5, 7, 9"
    },
    {
        id: "enumerate_func_l3",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "enumerate(iterable)",
        desc: "Attaches an index counter tracker to an iterable sequence object and returns synced pairs of (index, value) loops.",
        example: "words = ['rescue', 'food']\nfor idx, val in enumerate(words):\n    print(idx, val)"
    },
    {
        id: "zip_func_l3",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "zip(iterable1, iterable2)",
        desc: "Pairs up elements from two or more iterables simultaneously, combining matching index positions into clear tuples.",
        example: "names = ['Houssam', 'Manar']\nscores = [95, 98]\nfor n, s in zip(names, scores):\n    print(n, s)"
    },
    {
        id: "sorted_func",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "sorted(iterable, key=...)",
        desc: "Returns a completely new sorted list from the elements of any iterable sequence. The optional key parameter lets you map custom criteria mapping filters (like len).",
        example: "words = ['apple', 'go', 'banana']\nprint(sorted(words, key=len))  # Sorts words by character count"
    },
    {
        id: "max_func",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "max(iterable)",
        desc: "Returns the absolute largest computed item value present within an iterable dataset stream or multiple explicit inline arguments.",
        example: "print(max([14, 89, 52]))  # Outputs: 89"
    },
    {
        id: "abs_func",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "abs(x)",
        desc: "Returns the absolute positive magnitude value of a numeric coordinate. Essential to compute convergence error distance inside the Bisection algorithm loop.",
        example: "error_val = abs(-0.0045)\nprint(error_val)  # Outputs: 0.0045"
    },
    {
        id: "sum_func",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "sum(iterable)",
        desc: "Calculates the arithmetic running total accumulation by adding up all numeric items structured inside an iterable sequence collection.",
        example: "total_weight = sum([1.2, 3.4, 5.6])\nprint(total_weight)"
    },
    {
        id: "map_func_l3",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "map(func, iterable)",
        desc: "Passes each sequential component of an iterable structure through a specified transformer conversion function to map results.",
        example: "squared = list(map(lambda x: x**2, [1, 2, 3]))\nprint(squared)  # Outputs: [1, 4, 9]"
    },
    {
        id: "filter_func",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "filter(func, iterable)",
        desc: "Sifts elements out of an iterable layout sequence by validating items against a true/false conditional validation query execution.",
        example: "evens = list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4]))\nprint(evens)  # Outputs: [2, 4]"
    },
    {
        id: "next_func",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "next(iterator)",
        desc: "Advances and queries the immediate subsequent execution context value item out of an active pointer iterator or custom generator workspace.",
        example: "my_iter = iter([10, 20])\nprint(next(my_iter))  # Outputs: 10"
    },
    {
        id: "ord_func",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "ord(char)",
        desc: "Converts a single target text character symbol into its corresponding numerical integer representation value under Unicode/ASCII maps.",
        example: "print(ord('A'))  # Outputs: 65"
    },
    {
        id: "chr_func",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "chr(int)",
        desc: "Decodes a structural numeric coordinate integer system token back into its respective alphanumeric ASCII/Unicode text string layout.",
        example: "print(chr(65))  # Outputs: 'A'"
    },
    {
        id: "isalpha_method",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: ".isalpha()",
        desc: "Validates string composition. Yields true if every individual character inside the string is a valid alphabetical letter (a-z, A-Z).",
        example: "word = 'Algiers'\nprint(word.isalpha())  # Outputs: True"
    },
    {
        id: "isalpha_method_upper",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: ".isupper()",
        desc: "Validates string transformation casing. Evaluates to True if all alphabetical letters present inside the string are capitalized uppercase.",
        example: "code = 'WAFIR'\nprint(code.isupper())  # Outputs: True"
    },
    {
        id: "items_method",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: ".items()",
        desc: "Returns a dynamic view sequence of (key, value) dictionary tuples. Extensively utilized inside structural text frequency parsing routines.",
        example: "counts = {'the': 5, 'lab': 2}\nfor word, count in counts.items():\n    print(word, count)"
    },
    {
        id: "math_ceil",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "math.ceil(x)",
        desc: "Rounds any floating decimal scalar upward to the absolute nearest integer boundary value. Used to compute theoretical verification bounds.",
        example: "import math\nprint(math.ceil(4.1))  # Outputs: 5"
    },
    {
        id: "np_log2",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "np.log2(x)",
        desc: "Computes the vectorized binary logarithm (base-2) over single data variables or comprehensive multi-dimensional array coordinates using NumPy.",
        example: "import numpy as np\nprint(np.log2(8.0))  # Outputs: 3.0"
    },
    {
        id: "np_cos",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "np.cos(x)",
        desc: "Evaluates the mathematical trigonometric cosine sequence properties element-wise across arrays or scalar indices using NumPy namespaces.",
        example: "import numpy as np\nprint(np.cos(0.0))  # Outputs: 1.0"
    },
    {
        id: "plt_semilogy",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "plt.semilogy()",
        desc: "Configures linear-log plot interfaces transforming the y-axis to a logarithmic base scale while preserving a linear format across x-axis components.",
        example: "import matplotlib.pyplot as plt\n# plt.semilogy(epochs, error_margins)  # Used to analyze linear convergence"
    },
    {
        id: "lambda_keyword",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "lambda parameters: expression",
        desc: "Instantiates concise anonymous single-expression helper functions inline without needing formal functional definitions.",
        example: "f = lambda x: x**3 - 1\nprint(f(2))  # Outputs: 7"
    },
    {
        id: "yield_keyword",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Control Flows",
        func: "yield value",
        desc: "Suspends function runtime execution states to yield incremental stream tokens lazily, transforming basic routines into stateful Generators.",
        example: "def counter():\n    yield 1\n    yield 2\n# Pauses execution context data safely for iterative processing"
    },

    // --- LAB 04: NUMPY ROUTINES & LINEAR ALGEBRA ---
    {
        id: "np_arange",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.arange(start, stop, step)",
        desc: "Returns an array containing evenly spaced values within a designated numeric interval, generated sequentially down to (but excluding) the stop threshold.",
        example: "import numpy as np\narr = np.arange(0, 10, 2)\nprint(arr)  # Outputs: [0 2 4 6 8]"
    },
    {
        id: "np_linspace",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.linspace(start, stop, num)",
        desc: "Generates an array with exactly 'num' evenly spaced values calculated systematically across a specified range interval inclusive of both bounds.",
        example: "import numpy as np\nx_vals = np.linspace(-2, 2, 5)\nprint(x_vals)  # Outputs: [-2. -1.  0.  1.  2.]"
    },
    {
        id: "np_logspace",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.logspace(start, stop, num)",
        desc: "Returns evenly spaced numeric values mapped logarithmically between base exponents (default base is 10). Useful for tracking geometric step bounds.",
        example: "import numpy as np\ndecades = np.logspace(0, 3, 4)\nprint(decades)  # Outputs: [1. 10. 100. 1000.]"
    },
    {
        id: "np_zeros_ones",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.zeros() / np.ones()",
        desc: "Pre-allocates clear multidimensional ndarrays filled entirely with 0s or 1s according to a specified coordinate dimensions shape tuple.",
        example: "import numpy as np\nmatrix_z = np.zeros((2, 3))\nmatrix_o = np.ones((3, 1))"
    },
    {
        id: "np_full",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.full(shape, fill_value)",
        desc: "Initializes a multi-dimensional array matching a specified target shape layout filled entirely with a designated constant numeric value.",
        example: "import numpy as np\nconst_mat = np.full((2, 2), 7.5)\nprint(const_mat)"
    },
    {
        id: "np_full_like",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.full_like(a, fill_value)",
        desc: "Creates a new constant-filled array matching the exact structural dimensions shape and internal variable data type of an already existing array reference 'a'.",
        example: "import numpy as np\nbase = np.array([[1, 2], [3, 4]])\nmatched = np.full_like(base, -1)\nprint(matched)"
    },
    {
        id: "np_eye_identity",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.eye(N) / np.identity(N)",
        desc: "Constructs a clean 2D identity square matrix of dimension N x N, populated with 1s along the main diagonal and 0s everywhere else.",
        example: "import numpy as np\nid_matrix = np.eye(3)\nprint(id_matrix)"
    },
    {
        id: "np_diagflat",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.diagflat(list)",
        desc: "Flattens an input list or sequence data array and maps its items directly along the main diagonal of a newly constructed 2D array workspace.",
        example: "import numpy as np\ndiag_mat = np.diagflat([5, 10, 15])\nprint(diag_mat)"
    },
    {
        id: "np_tri_triu_tril",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.tri() / np.tril() / np.triu()",
        desc: "Generates or isolates triangular matrix slices. tri() sets 1s at or below a diagonal; tril() pulls a lower triangle; triu() extracts an upper triangle.",
        example: "import numpy as np\nmat = np.array([[1,2,3],[4,5,6],[7,8,9]])\nprint(np.tril(mat))  # Zeros out elements above main diagonal"
    },
    {
        id: "np_asarray_asmatrix",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.asarray() / np.asmatrix()",
        desc: "Converts plain Python raw sequence lists or tuples into memory-efficient NumPy ndarray or matrix reference objects without copying data if possible.",
        example: "import numpy as np\nraw_list = [10, 20, 30]\narr = np.asarray(raw_list)\nprint(type(arr))  # Outputs: <class 'numpy.ndarray'>"
    },
    {
        id: "np_reshape_l4",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: ".reshape(shape)",
        desc: "Reorganizes an array into a different dimensional coordinate layout without updating underlying raw memory buffers. Using -1 lets NumPy compute that axis size.",
        example: "import numpy as np\nflat = np.arange(6)\nmatrix_2d = flat.reshape(2, 3)  # Transformed into 2 rows, 3 columns"
    },
    {
        id: "np_flatten",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: ".flatten()",
        desc: "Collapses a multi-dimensional array layer structure downward into a clean, simple 1D array layout copy.",
        example: "import numpy as np\nmat = np.array([[1, 2], [3, 4]])\nprint(mat.flatten())  # Outputs: [1 2 3 4]"
    },
    {
        id: "np_squeeze",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.squeeze(arr)",
        desc: "Scans array layouts and compresses away empty single-dimensional axes (axes where the length size equals 1) out of array shape dimensions.",
        example: "import numpy as np\nstretched = np.array([[[1], [2]]])  # Shape is (1, 2, 1)\nprint(np.squeeze(stretched).shape)  # Compressed shape drops to (2,)"
    },
    {
        id: "np_transpose_l4",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.transpose() / .T",
        desc: "Swaps axes columns and row coordinates across a target matrix layout. Instantly returns the algebraic transpose matrix representation.",
        example: "import numpy as np\nA = np.array([[1, 2], [3, 4]])\nprint(A.T)  # Matrix entries swap positions across the diagonal"
    },
    {
        id: "np_stacks",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.vstack() / np.hstack() / np.row_stack()",
        desc: "Glues sub-arrays together in blocks. vstack and row_stack slice rows vertically downwards; hstack stacks sequence elements horizontally column-wise.",
        example: "import numpy as np\na = np.array([1, 2])\nb = np.array([3, 4])\nprint(np.vstack((a, b)))  # Combines into a 2x2 matrix stacked vertically"
    },
    {
        id: "np_copy_l4",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: ".copy()",
        desc: "Allocates independent space to create a deep duplicate of an array. Changes to the copy won't overwrite the original array values.",
        example: "import numpy as np\nA_orig = np.array([1, 2, 3])\nA_safe = A_orig.copy()\nA_safe[0] = 99  # A_orig remains unaffected"
    },
    {
        id: "np_sum_axis",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.sum(arr, axis)",
        desc: "Sums elements. Setting axis=0 aggregates data downwards collapsing across rows (column totals); axis=1 collapses elements sideways across columns (row totals).",
        example: "import numpy as np\nM = np.array([[1, 2], [3, 4]])\nprint(np.sum(M, axis=0))  # Column totals. Outputs: [4 6]"
    },
    {
        id: "np_trace",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.trace(arr)",
        desc: "Calculates the matrix trace by identifying and adding up all individual numeric elements located along the primary main diagonal line.",
        example: "import numpy as np\nM = np.array([[1, 2], [3, 4]])\nprint(np.trace(M))  # 1 + 4. Outputs: 5"
    },
    {
        id: "np_linalg_norm",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.linalg.norm(arr)",
        desc: "Computes the algebraic vector length or matrix norm (such as the entry-wise Frobenius norm or Euclidean distance metric).",
        example: "import numpy as np\nvec = np.array([3, 4])\nprint(np.linalg.norm(vec))  # Euclidean length. Outputs: 5.0"
    },
    {
        id: "np_linalg_inv_l4",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.linalg.inv(arr)",
        desc: "Calculates the multiplicative inverse of a square, non-singular linear matrix. Essential for computing analytical solutions.",
        example: "import numpy as np\nA = np.array([[2, 1], [1, 2]])\nprint(np.linalg.inv(A))"
    },
    {
        id: "np_dot_operator",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.dot() / @ operator",
        desc: "Performs matrix-matrix or matrix-vector dot product multiplication operations according to the rules of linear algebra.",
        example: "import numpy as np\nA = np.array([[1, 2], [3, 4]])\nx = np.array([1, 1])\nprint(A @ x)  # True row-column multiplication output"
    },
    {
        id: "np_linalg_det",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.linalg.det(arr)",
        desc: "Computes the scalar determinant value of a square matrix to test system singularity or linear dependence characteristics.",
        example: "import numpy as np\nA = np.array([[1, 2], [3, 4]])\nprint(np.linalg.det(A))  # Outputs: -2.0"
    },
    {
        id: "np_linalg_eig",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.linalg.eig(arr)",
        desc: "Computes and returns a paired tuple containing the scalar eigenvalues list and the corresponding normalized eigenvectors matrix layout.",
        example: "import numpy as np\nA = np.array([[1, 0], [0, 2]])\neigenvalues, eigenvectors = np.linalg.eig(A)"
    },
    {
        id: "np_linalg_solve_l4",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.linalg.solve(A, b)",
        desc: "Solves an exact system of linear algebraic equations structured in the vector matrix format Ax = b, running faster than a direct manual matrix inversion.",
        example: "import numpy as np\nA = np.array([[3, 1], [1, 2]])\nb = np.array([9, 8])\nx = np.linalg.solve(A, b)\nprint(x)  # Vector solution elements"
    },
    {
        id: "np_random_rand",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.random.rand()",
        desc: "Generates uniformly distributed random float numbers inside the standard continuous open interval [0.0, 1.0).",
        example: "import numpy as np\nrand_vals = np.random.rand(3, 3)  # Produces a 3x3 uniform random block"
    },
    {
        id: "np_random_randn",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "np.random.randn()",
        desc: "Generates sample numbers derived directly from a standard normal distribution (Gaussian bell curve centered at mean=0, std=1).",
        example: "import numpy as np\ngaussian_noise = np.random.randn(100)"
    },
    {
        id: "help_utility",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "help(func)",
        desc: "Python's built-in interactive console help engine tool. Queries and returns the formal text documentation and input requirements of a function.",
        example: "import numpy as np\n# help(np.linspace)  # Prints detailed parameter manual instructions"
    },
    {
        id: "isinstance_utility",
        chap: "lab4",
        chapTitle: "Lab 04: NumPy & Matrix Calculus",
        func: "isinstance(obj, type)",
        desc: "Performs validation checking. Evaluates to True if a targeted data instance variable matches a specified structural class or type blueprint.",
        example: "import numpy as np\nA = np.array([1, 2])\nprint(isinstance(A, np.ndarray))  # Outputs: True"
    },

    // --- LAB 06: SYMPY SYMBOLIC ANALYSIS ---
    {
        id: "sp_init_printing",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "init_printing()",
        desc: "Configures SymPy's rendering engine to automatically display equations into crisp, structured LaTeX/MathJax expressions inside the active workspace.",
        example: "import sympy as sp\nsp.init_printing(use_latex='mathjax')"
    },
    {
        id: "sp_symbols",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "symbols('x y z')",
        desc: "Instantiates independent symbolic variables used for constructing exact, un-evaluated algebraic expressions without requiring concrete numerical assignments.",
        example: "import sympy as sp\nx, y, z = sp.symbols('x y z')\nexpr = x + 2*y + z**2"
    },
    {
        id: "sp_rational_exact",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "Rational(p, q)",
        desc: "Constructs an exact fractional representation of p/q. Prevents the native Python environment from truncating the value into a loose floating decimal approximation.",
        example: "import sympy as sp\nfractional_sum = sp.Rational(2, 7) + sp.Rational(5, 3)\nprint(fractional_sum)  # Outputs: 41/21"
    },
    {
        id: "sp_imaginary_constant",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "SymPy Imaginary Unit 'I'",
        desc: "Represents the exact imaginary unit identity constant i. Enables high-fidelity math manipulation over the complex numbers spectrum without decimal loss.",
        example: "import sympy as sp\ncomplex_num = (3 + 4*sp.I) * (2 - sp.I)\nprint(sp.simplify(complex_num))  # Outputs: 10 + 5*I"
    },
    {
        id: "sp_pi_constant",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "SymPy 'pi'",
        desc: "Represents the exact mathematical transcendental circle constant ratio π inside symbolic calculus routines.",
        example: "import sympy as sp\nprint(sp.sin(sp.pi / 2))  # Outputs exact structural evaluation: 1"
    },
    {
        id: "sp_infinity_constant",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "SymPy Infinity 'oo'",
        desc: "Represents positive mathematical infinity (∞) inside computational equations, symbol boundaries, and integration or limits endpoints.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.limit(1/x, x, sp.oo))  # Outputs: 0"
    },
    {
        id: "sp_simplify_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "simplify(expr)",
        desc: "Intelligently parses a target math expression and executes structural identities to compress it into its shortest mathematical notation format.",
        example: "import sympy as sp\nx, y = sp.symbols('x y')\nE = (x + y)**3 - (x - y)**3\nprint(sp.simplify(E))  # Outputs: 2*y*(3*x**2 + y**2)"
    },
    {
        id: "sp_expand_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "expand(expr)",
        desc: "Expands combined polynomial configurations, distributing product bounds completely across addition components.",
        example: "import sympy as sp\nx, y = sp.symbols('x y')\nprint(sp.expand((x + y)**2))  # Outputs: x**2 + 2*x*y + y**2"
    },
    {
        id: "sp_subs_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: ".subs([(old, new)])",
        desc: "Performs clean element replacement by matching a target symbol placeholder or sub-expression and mapping it to a fresh variable numeric point.",
        example: "import sympy as sp\nx = sp.symbols('x')\nexpr = x**2 + 1\nprint(expr.subs(x, 4))  # Evaluates expression at point 4. Outputs: 17"
    },
    {
        id: "sp_factor_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "factor(expr)",
        desc: "Deconstructs a complex polynomial equation down into its individual irreducible composite factors. Setting gaussian=True factors calculations across complex spaces.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.factor(x**2 - 1))  # Outputs: (x - 1)*(x + 1)"
    },
    {
        id: "sp_together_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "together(expr)",
        desc: "Combines decoupled rational rational statements by calculating common denominator footprints and merging numerator additions.",
        example: "import sympy as sp\nx, y = sp.symbols('x y')\nprint(sp.together(1/x + 1/y))  # Outputs: (x + y)/(x*y)"
    },
    {
        id: "sp_arg_complex",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "arg(c)",
        desc: "Calculates the structural phase angle or quadrant argument of a target complex number equation statement.",
        example: "import sympy as sp\nprint(sp.arg(5 + 12*sp.I))  # Outputs symbolic definition: atan(12/5)"
    },
    {
        id: "sp_abs_complex",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "abs(c)",
        desc: "Computes the exact vector norm, magnitude modulus, or absolute geometric length distance properties of a complex mathematical object.",
        example: "import sympy as sp\nprint(sp.abs(5 + 12*sp.I))  # Outputs exact scalar evaluation: 13"
    },
    {
        id: "sp_eq_constructor",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "Eq(lhs, rhs)",
        desc: "Constructs a robust logical symbolic equation model checking balance equality between a left-hand side and right-hand side structure.",
        example: "import sympy as sp\nx = sp.symbols('x')\nequation = sp.Eq(x**2 - 4, 0)  # Models the structure x^2 - 4 = 0"
    },
    {
        id: "sp_solveset_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "solveset(eq, var, domain)",
        desc: "Solves a single equation targeting an explicit single evaluation variable across declared constraint spaces (like S.Reals or explicit intervals).",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.solveset(sp.Eq(x**2 - 1, 0), x))  # Outputs exact root sets: {-1, 1}"
    },
    {
        id: "sp_solve_systems",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "solve([eqs], [vars])",
        desc: "Solves comprehensive systems of overlapping linear or non-linear scalar math equations simultaneously.",
        example: "import sympy as sp\nx, y = sp.symbols('x y')\neq1 = sp.Eq(x + y, 5)\neq2 = sp.Eq(x - y, 1)\nprint(sp.solve([eq1, eq2], [x, y]))  # Outputs: {x: 3, y: 2}"
    },
    {
        id: "sp_limit_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "limit(expr, var, point)",
        desc: "Calculates the analytical mathematical calculus limit structure of an equation expression as a specified variable parameter converges towards a target boundary point.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.limit(sp.sin(x)/x, x, 0))  # Outputs fundamental limit: 1"
    },
    {
        id: "sp_summation_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "summation(expr, (v, s, e))",
        desc: "Evaluates the analytical summation progression of a specified sequence formula structure across defined numerical range index markers inclusive.",
        example: "import sympy as sp\nn = sp.symbols('n')\nprint(sp.summation(n**2, (n, 1, 100)))  # Computes analytical sum"
    },
    {
        id: "sp_product_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "product(expr, (v, s, e))",
        desc: "Evaluates the analytical multiplicative infinite or finite product loop sequence of an algebraic target formula layout.",
        example: "import sympy as sp\nk = sp.symbols('k')\nprint(sp.product(k, (k, 1, 8)))  # Computes exact product sequence (factorial)"
    },
    {
        id: "sp_diff_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "diff(expr, var, n)",
        desc: "Calculates the nth structural exact derivative rate of change evaluation of an expression with respect to a chosen derivative marker variable.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.diff(x**4, x, 2))  # Performs 2nd order derivative. Outputs: 12*x**2"
    },
    {
        id: "sp_integrate_engine",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "integrate(expr, bounds)",
        desc: "Computes definite integrals if passed with an operational bounds sequence tuple tracking variable ranges, or indefinites if missing step metrics.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.integrate(x**2, (x, 0, 3)))  # Computes area under curve. Outputs: 9"
    },
    {
        id: "sp_series_expansion",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: ".series(var, point, order)",
        desc: "Generates high-fidelity Taylor, Maclaurin, or Laurent series function mathematical expansion profiles computed closely centered around a target validation anchor point.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.sin(x).series(x, 0, 5))  # Returns sequence expansion polynomial"
    },
    {
        id: "sp_matrix_constructor",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "Matrix([[...]])",
        desc: "Initializes structural multi-dimensional linear systems matrices storing completely symbolic variables and exact algebraic fractions.",
        example: "import sympy as sp\nx = sp.symbols('x')\nM = sp.Matrix([[x, 1], [0, x]])"
    },
    {
        id: "sp_matrix_det",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "Matrix.det()",
        desc: "Calculates the analytical symbolic determinant equation profile of a custom constructed square symbolic SymPy Matrix structure.",
        example: "import sympy as sp\na, b, c, d = sp.symbols('a b c d')\nM = sp.Matrix([[a, b], [c, d]])\nprint(M.det())  # Outputs exact polynomial: a*d - b*c"
    },
    {
        id: "sp_matrix_eigenvals",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "Matrix.eigenvals()",
        desc: "Computes the exact mathematical eigenvalues of a symbolic matrix, returning a structural mapping showing specific eigenvalues alongside their multiplicities.",
        example: "import sympy as sp\nM = sp.Matrix([[2, 0], [0, 5]])\nprint(M.eigenvals())  # Outputs mapped solution: {2: 1, 5: 1}"
    },
    {
        id: "sp_matrix_rref",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "Matrix.rref()",
        desc: "Performs full elementary row transformations to reduce a symbolic matrix layout to its Reduced Row Echelon Form. Returns a tuple with the matrix and pivot columns.",
        example: "import sympy as sp\nM = sp.Matrix([[1, 2], [3, 7]])\nreduced_M, pivots = M.rref()"
    },
    {
        id: "sp_exp_func",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "exp(x)",
        desc: "Represents the exact symbolic continuous exponential transcendental function model e^x inside tracking math calculus computations.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.diff(sp.exp(2*x), x))  # Outputs: 2*exp(2*x)"
    },
    {
        id: "sp_ln_func",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "ln(x)",
        desc: "Models the exact symbolic natural base-e logarithm formula mapping logic across defined calculation boundaries.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.integrate(1/x, x))  # Outputs structural formulation: log(x)"
    },
    {
        id: "sp_trig_functions",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "sin(x) / cos(x) / tan(x)",
        desc: "Executes precise, non-evaluated symbolic representation tracking models across standard trigonometric configurations.",
        example: "import sympy as sp\nx = sp.symbols('x')\nprint(sp.simplify(sp.sin(x)**2 + sp.cos(x)**2))  # Evaluates to structural scalar: 1"
    },
    {
        id: "sp_plot_2d",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "plot(expr, range)",
        desc: "Generates high-performance interactive 2D visualization coordinate charts mapping a symbolic equation across a specified single-variable interval step configuration.",
        example: "import sympy as sp\nx = sp.symbols('x')\n# sp.plot(x**2, (x, -5, 5))  # Generates 2D parabola chart visualization"
    },
    {
        id: "sp_plot_3d",
        chap: "lab6",
        chapTitle: "Lab 06: SymPy Symbolic Analysis",
        func: "plot3d(expr, range_x, range_y)",
        desc: "Renders 3D mathematical surface contours graphing functional operations with two independent variable coordinates over dual bounding box matrices.",
        example: "import sympy as sp\nx, y = sp.symbols('x y')\n# sp.plot3d(x**2 - y**2, (x, -2, 2), (y, -2, 2))  # Generates 3D hyperbolic saddle chart"
    }
];

// ==========================================
// GUIDED PRACTICE WORKOUTS SETUP
// ==========================================
const practiceWorkouts = [
    {
        id: "p_lab1_profile",
        chap: "lab1",
        chapTitle: "Lab 01: Interactive IO Platform",
        title: "User Profile IO & Type Casting",
        badge: "Lab 01",
        instructions: `<p>Practice text data collection, explicit type casting, and structured multiline outputs using standard operations.</p>`,
        starter: `item_input = "45"\nage_num = 21\ncount = int(item_input)\nuser_id = "ID-" + str(age_num)\nprint(f"""\\n--- USER PROFILE ---\\nAccount Token: {user_id}\\nRegistered Count: {count}\\n--------------------""")`,
        expected: "--- USER PROFILE ---\nAccount Token: ID-21\nRegistered Count: 45\n--------------------"
    },
    {
        id: "p_lab1_operators",
        chap: "lab1",
        chapTitle: "Lab 01: Arithmetic Operators Calculus",
        title: "Floor Division, Modulo, and Powers",
        badge: "Lab 01",
        instructions: `<p>Evaluate core math power operations, floor values, and remainders cleanly.</p>`,
        starter: `base_scale = 10\nprocessing_value = 25\nblock_size = 6\ncoef = base_scale ** 6\nwhole_blocks = processing_value // block_size\nremainder = processing_value % block_size\nprint(f"Scale: {coef}")\nprint(f"Whole Blocks: {whole_blocks}")\nprint(f"Remaining Steps: {remainder}")`,
        expected: "Scale: 1000000\nWhole Blocks: 4\nRemaining Steps: 1"
    },
    {
        id: "p_lab1_coordinates",
        chap: "lab1",
        chapTitle: "Lab 01: Linear Coordinates Parsing",
        title: "Coordinate Mapping & Tuple Slicing",
        badge: "Lab 01",
        instructions: `<p>Convert comma-separated data row segments into floating float indices manually.</p>`,
        starter: `raw_input = "3.0,7.5"\nx, y = map(float, raw_input.split(','))\npoint = (x, y)\nprint("Extracted Coordinate X:", point[0])\nprint("Extracted Coordinate Y:", point[1])`,
        expected: "Extracted Coordinate X: 3.0\nExtracted Coordinate Y: 7.5"
    },
    {
        id: "p_lab2_registry",
        chap: "lab2",
        chapTitle: "Lab 02: Structural Data Systems",
        title: "Meteorological Registry & Safe Access",
        badge: "Lab 02",
        instructions: `<p>Test structured updates, sorting sequences, and fallback dictionary metrics lookups.</p>`,
        starter: `stations = {'ALG': 'North', 'ORA': 'Northwest'}\nreadings = [12.5, 9.1, 15.3]\nnew_code = "con".upper()\nstations.update({new_code: 'High Plateau'})\nreadings.append(11.2)\nreadings.sort()\ncheck_region = stations.get('TAM', 'Unknown Region')\nprint("Total Stations Registered:", len(stations))\nprint("Sorted Wind Readings:", readings)\nprint("Lookup Test (TAM):", check_region)`,
        expected: "Total Stations Registered: 3\nSorted Wind Readings: [9.1, 11.2, 12.5, 15.3]\nLookup Test (TAM): Unknown Region"
    },
    {
        id: "p_lab2_sets",
        chap: "lab2",
        chapTitle: "Lab 02: Mathematical Collection Layers",
        title: "Trigonometric Evaluations & Set Calculus",
        badge: "Lab 02",
        instructions: `<p>Isolate unique intersecting data points and set variations seamlessly.</p>`,
        starter: `import math\ntrig_check = math.sin(math.pi / 2)\nexperimental_ids = set([101, 102, 103, 103])\nverified_ids = set([103, 104, 105])\ncommon = experimental_ids.intersection(verified_ids)\nunique_exp = experimental_ids.difference(verified_ids)\nprint("Trig Calculation check:", trig_check)\nprint("Common System Keys:", sorted(list(common)))\nprint("Unique Experimental Keys:", sorted(list(unique_exp)))`,
        expected: "Trig Calculation check: 1.0\nCommon System Keys: [103]\nUnique Experimental Keys: [101, 102]"
    },
    {
        id: "p_lab2_comprehensive",
        chap: "lab2",
        chapTitle: "Lab 02: Integrated Variable Mapping",
        title: "Client Unpacking & Metadata Pipeline",
        badge: "Lab 02",
        instructions: `<p>Deconstruct text rows into type-cast structures inside key mappings.</p>`,
        starter: `raw_data = "wafir,5000.0"\nmilestones = ["Development", "Deployment"]\napp_name, goal_raw = raw_data.split(',')\ngoal = float(goal_raw)\napp_upper = app_name.upper()\nmilestones.insert(0, "Conceptualization")\nprofile = {"app": app_upper, "target": goal}\nprofile_keys = profile.keys()\nprint("Type Check:", type(goal))\nprint("Updated Milestones Flow:", milestones)\nprint("Profile Registry Keys:", sorted(list(profile_keys)))`,
        expected: "Type Check: <class 'float'>\nUpdated Milestones Flow: ['Conceptualization', 'Development', 'Deployment']\nProfile Registry Keys: ['app', 'target']"
    },
    {
        id: "p_lab3_bisection_metrics",
        chap: "lab3",
        chapTitle: "Lab 03: Iterations & Functional Limits",
        title: "Theoretical Bounds & Root Iterations",
        badge: "Lab 03",
        instructions: `<p>Build verification metrics for tracking bisection iterations loops checks.</p>`,
        starter: `import math\nimport numpy as np\nconfig = {"a": 0.0, "b": 2.0, "tol": 0.03125}\nN = math.ceil(np.log2((config["b"] - config["a"]) / config["tol"]))\nf = lambda x: x**3 - 1\ntest_points = [2, 0]\nevals = list(map(f, test_points))\nerror_margin = abs(f(0.0))\nprint("Theoretical loops check:", N)\nprint("Functional root evaluations:", evals)\nprint("Safe magnitude test status:", error_margin <= 1.0)`,
        expected: "Theoretical loops check: 6\nFunctional root evaluations: [7, -1]\nSafe magnitude test status: True"
    },
    {
        id: "p_lab4_grid_geometry",
        chap: "lab4",
        chapTitle: "Lab 04: Matrix Calculus & Shapes",
        title: "Meteorological Grid Reshaping & Reductions",
        badge: "Lab 04",
        instructions: `<p>Reshape flat vector tracking measurements into multidimensional grids.</p>`,
        starter: `import numpy as np\nraw_readings = [10.0, 20.0, 30.0, 40.0, 50.0, 60.0]\narr = np.asarray(raw_readings)\ntype_check = isinstance(arr, np.ndarray)\ngrid = arr.reshape(3, 2)\nrow_totals = np.sum(grid, axis=1)\nprint("Grid Shape Dimension:", grid.shape)\nprint("Calculated Row Totals Array:", row_totals)\nprint("Array Identity Match Status:", type_check)`,
        expected: "Grid Shape Dimension: (3, 2)\nCalculated Row Totals Array: [ 30.  70. 110.]\nArray Identity Match Status: True"
    },
    {
        id: "p_lab6_calculus_pipeline",
        chap: "lab6",
        chapTitle: "Lab 06: Symbolic Matrix Calculus",
        title: "Analytical Optimization & Exact Integrals",
        badge: "Lab 06",
        instructions: `<p>Compute analytical derivatives, value mappings, and area integrals using SymPy constants.</p>`,
        starter: `import sympy as sp\nx = sp.symbols('x')\nval = sp.Rational(1, 2)\nE = sp.Rational(2, 3)*x**3 - sp.exp(x)\nderivative = sp.diff(E, x)\nslope_at_half = derivative.subs(x, val)\narea = sp.integrate(E, (x, 0, 1))\nprint("Derivative expression:", derivative)\nprint("Exact slope at x=1/2:", slope_at_half)\nprint("Exact area integration:", area)`,
        expected: "Derivative expression: 2*x**2 - exp(x)\nExact slope at x=1/2: 1/2 - exp(1/2)\nExact area integration: 7/6 - exp(1)"
    }
];
