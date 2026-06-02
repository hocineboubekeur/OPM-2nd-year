const plotExamples = [
    {
        name: "📈 Line Plot (Sine Wave)",
        code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)
plt.plot(x, y, label='sin(x)', color='blue', linewidth=2)
plt.title('Sine Wave')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()`
    },
    {
        name: "📊 Bar Chart",
        code: `import matplotlib.pyplot as plt

categories = ['A', 'B', 'C', 'D', 'E']
values = [23, 45, 56, 78, 32]
colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7']
plt.bar(categories, values, color=colors, edgecolor='white', linewidth=1.5)
plt.title('Sample Bar Chart')
plt.xlabel('Category')
plt.ylabel('Value')
plt.grid(axis='y', alpha=0.3)
plt.show()`
    },
    {
        name: "🔵 Scatter Plot",
        code: `import matplotlib.pyplot as plt
import numpy as np

np.random.seed(42)
x = np.random.randn(100)
y = 2 * x + np.random.randn(100) * 0.5
colors = np.random.rand(100)
plt.scatter(x, y, c=colors, alpha=0.7, cmap='viridis', edgecolor='white')
plt.colorbar(label='Color intensity')
plt.title('Scatter Plot with Color Mapping')
plt.xlabel('X values')
plt.ylabel('Y values')
plt.grid(alpha=0.3)
plt.show()`
    },
    {
        name: "📊 Histogram",
        code: `import matplotlib.pyplot as plt
import numpy as np

data = np.random.randn(1000)
plt.hist(data, bins=40, color='purple', edgecolor='white', alpha=0.8)
plt.title('Histogram of Random Data')
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.axvline(x=0, color='red', linestyle='--', alpha=0.7, label='Mean')
plt.legend()
plt.grid(alpha=0.3)
plt.show()`
    },
    {
        name: "🥧 Pie Chart",
        code: `import matplotlib.pyplot as plt

sizes = [30, 25, 20, 15, 10]
labels = ['Python', 'JavaScript', 'C++', 'Java', 'Other']
colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7']
explode = (0.05, 0.05, 0.05, 0.05, 0.05)

plt.pie(sizes, explode=explode, labels=labels, colors=colors,
        autopct='%1.1f%%', shadow=True, startangle=140)
plt.title('Programming Language Popularity')
plt.axis('equal')
plt.show()`
    },
    {
        name: "🌐 3D Surface Plot",
        code: `import matplotlib.pyplot as plt
import numpy as np
from mpl_toolkits.mplot3d import Axes3D

fig = plt.figure(figsize=(10, 7))
ax = fig.add_subplot(111, projection='3d')
x = np.linspace(-5, 5, 50)
y = np.linspace(-5, 5, 50)
X, Y = np.meshgrid(x, y)
Z = np.sin(np.sqrt(X**2 + Y**2))
surf = ax.plot_surface(X, Y, Z, cmap='viridis', edgecolor='none', alpha=0.9)
ax.set_title('3D Surface: sin(sqrt(x² + y²))')
ax.set_xlabel('X axis')
ax.set_ylabel('Y axis')
ax.set_zlabel('Z axis')
fig.colorbar(surf, ax=ax, shrink=0.5, aspect=10)
plt.show()`
    },
    {
        name: "📉 Multiple Subplots",
        code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
fig, axes = plt.subplots(2, 2, figsize=(12, 8))

axes[0, 0].plot(x, np.sin(x), color='blue')
axes[0, 0].set_title('sin(x)')
axes[0, 0].grid(alpha=0.3)

axes[0, 1].plot(x, np.cos(x), color='red')
axes[0, 1].set_title('cos(x)')
axes[0, 1].grid(alpha=0.3)

axes[1, 0].plot(x, np.sin(x)**2, color='green')
axes[1, 0].set_title('sin²(x)')
axes[1, 0].grid(alpha=0.3)

axes[1, 1].plot(x, np.sin(x) * np.cos(x), color='purple')
axes[1, 1].set_title('sin(x)·cos(x)')
axes[1, 1].grid(alpha=0.3)

plt.tight_layout()
plt.show()`
    },
    {
        name: "🔻 Filled Area Plot",
        code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.sin(x) + 0.5

plt.fill_between(x, y1, y2, alpha=0.3, color='blue', label='Area between curves')
plt.plot(x, y1, 'b-', linewidth=2, label='sin(x)')
plt.plot(x, y2, 'r-', linewidth=2, label='sin(x) + 0.5')
plt.title('Filled Area Between Curves')
plt.xlabel('x')
plt.ylabel('y')
plt.legend()
plt.grid(alpha=0.3)
plt.show()`
    },
    {
        name: "📌 Stem Plot",
        code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 20)
y = np.exp(-x/3) * np.sin(x)

plt.stem(x, y, linefmt='grey', markerfmt='ro', basefmt='k-')
plt.title('Stem Plot: Damped Oscillation')
plt.xlabel('x')
plt.ylabel('e^(-x/3) · sin(x)')
plt.grid(alpha=0.3)
plt.show()`
    },
    {
        name: "🎯 Contour Plot",
        code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-5, 5, 100)
y = np.linspace(-5, 5, 100)
X, Y = np.meshgrid(x, y)
Z = np.sin(X) * np.cos(Y)

plt.contourf(X, Y, Z, levels=20, cmap='RdYlBu')
plt.colorbar(label='Intensity')
plt.title('Filled Contour Plot')
plt.xlabel('X')
plt.ylabel('Y')
plt.show()`
    },
        {
        name: "📉 Exponential Decay Comparison",
        code: `import matplotlib.pyplot as plt
import numpy as np

t = np.linspace(0, 5, 200)
f1 = np.exp(-t)
f2 = np.exp(-2*t)

plt.plot(t, f1, 'b-', label='e^{-t}')
plt.plot(t, f2, 'r--', label='e^{-2t}')
plt.xlabel('Time')
plt.ylabel('Amplitude')
plt.title('Exponential Decay Rates')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()`
    },
    {
        name: "🔍 Annotated Sine Wave",
        code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 2*np.pi, 200)
y = np.sin(x)

plt.plot(x, y, 'b-')
plt.axhline(0, color='black', linewidth=0.8)
plt.axvline(np.pi, color='red', linestyle='--', label='π')

# Annotate a point
plt.annotate('Local Max', xy=(np.pi/2, 1), xytext=(np.pi/2+1, 0.8),
             arrowprops=dict(facecolor='black', shrink=0.05))

plt.xlabel('x')
plt.ylabel('sin(x)')
plt.title('Annotated Sine Wave')
plt.legend()
plt.grid(alpha=0.3)
plt.show()`
    },
    {
        name: "📊 Multiple Subplot Types",
        code: `import matplotlib.pyplot as plt
import numpy as np

fig, axes = plt.subplots(2, 2, figsize=(10, 8))

# Top-left: Line plot
x = np.linspace(0, 10, 100)
axes[0, 0].plot(x, np.sin(x), 'tab:blue')
axes[0, 0].set_title('Line')

# Top-right: Bar chart
axes[0, 1].bar(['A', 'B', 'C'], [5, 3, 7], color='tab:orange')
axes[0, 1].set_title('Bar')

# Bottom-left: Histogram
axes[1, 0].hist(np.random.randn(500), bins=30, color='tab:green', alpha=0.7)
axes[1, 0].set_title('Histogram')

# Bottom-right: Scatter
axes[1, 1].scatter(np.random.rand(50), np.random.rand(50), color='tab:red', alpha=0.6)
axes[1, 1].set_title('Scatter')

plt.tight_layout()
plt.show()`
    },
    {
        name: "🌹 Polar Plot (Rose)",
        code: `import matplotlib.pyplot as plt
import numpy as np

theta = np.linspace(0, 2*np.pi, 1000)
r = 1 + 0.5 * np.sin(6 * theta)  # Six-petal rose

plt.figure(figsize=(6,6))
ax = plt.subplot(111, projection='polar')
ax.plot(theta, r, 'r-', linewidth=2)
ax.set_title('Polar Rose: r = 1 + 0.5·sin(6θ)')
ax.fill(theta, r, alpha=0.2, color='red')
plt.show()`
    },
    {
        name: "📈 Step Histogram & Cumulative",
        code: `import matplotlib.pyplot as plt
import numpy as np

data = np.random.randn(500) * 1.5 + 3

# Step histogram (no fill)
plt.hist(data, bins=40, density=True, histtype='step', color='purple', linewidth=2, label='Density')

# Cumulative histogram
plt.hist(data, bins=40, density=True, histtype='step', cumulative=True, color='blue', linewidth=2, label='Cumulative')

plt.xlabel('Value')
plt.ylabel('Probability')
plt.title('Step Histogram & Cumulative')
plt.legend()
plt.grid(alpha=0.3)
plt.show()`
    },
    {
        name: "🎨 Custom Style & Fill Between",
        code: `import matplotlib.pyplot as plt
import numpy as np

plt.style.use('ggplot')  # Apply a pre-defined style

x = np.linspace(0, 10, 200)
y1 = np.sin(x)
y2 = np.cos(x)

plt.fill_between(x, y1, y2, where=(y1 > y2), color='green', alpha=0.3, label='sin > cos')
plt.fill_between(x, y1, y2, where=(y1 <= y2), color='red', alpha=0.3, label='sin <= cos')
plt.plot(x, y1, 'b-', linewidth=2, label='sin(x)')
plt.plot(x, y2, 'r-', linewidth=2, label='cos(x)')
plt.xlabel('x')
plt.ylabel('y')
plt.title('Fill Between with ggplot Style')
plt.legend()
plt.show()`
    }
];
