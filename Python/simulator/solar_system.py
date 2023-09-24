import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib.animation import FuncAnimation

class CelestialBody:
    def __init__(self, name, mass, position, velocity):
        self.name = name
        self.mass = mass
        self.position = np.array(position)
        self.velocity = np.array(velocity)

class SolarSystem3D:
    def __init__(self):
        self.bodies = []

    def add_body(self, name, mass, position, velocity):
        body = CelestialBody(name, mass, position, velocity)
        self.bodies.append(body)

    def update(self, dt):
        for body1 in self.bodies:
            acceleration = np.zeros(3)
            for body2 in self.bodies:
                if body1 != body2:
                    r = body2.position - body1.position
                    acceleration += body2.mass * r / np.linalg.norm(r)**3
            body1.velocity += acceleration * dt
            body1.position += body1.velocity * dt

# Create a 3D solar system
solar_system = SolarSystem3D()

# Add celestial bodies
solar_system.add_body("Sun", mass=1, position=[0, 0, 0], velocity=[0, 0, 0])
solar_system.add_body("Earth", mass=3e-6, position=[1, 0, 0], velocity=[0, 2 * np.pi, 0])
solar_system.add_body("Mars", mass=3.3e-7, position=[1.5, 0, 0], velocity=[0, 1.88 * np.pi, 0])

# Set up the 3D plot
fig = plt.figure()
ax = fig.add_subplot(111, projection="3d")
ax.set_xlim(-2, 2)
ax.set_ylim(-2, 2)
ax.set_zlim(-2, 2)

# Initialize the plot with empty data
plot_data = [ax.plot([], [], [], "o", markersize=5)[0] for _ in range(len(solar_system.bodies))]

# Update function for the animation
def update(frame):
    solar_system.update(1 / 365)
    for i, body in enumerate(solar_system.bodies):
        plot_data[i].set_data(body.position[0], body.position[1])
        plot_data[i].set_3d_properties(body.position[2])
    return plot_data

# Create the animation
ani = FuncAnimation(fig, update, frames=365, blit=True)

# Show the plot
plt.show()