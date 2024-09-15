import numpy as np
import matplotlib.pyplot as plt

# Constants
NUM_SERVERS = 8
QUERY_PROCESSING_TIME = 10  # Simulated query processing time in milliseconds

def simulate_average_response_time(mean_latency, std_deviation, num_samples):
    avg_response_times = []
    for _ in range(num_samples):
        # Simulate network latency as normal distribution
        network_latency = np.random.normal(mean_latency, std_deviation, NUM_SERVERS)
        
        # Simulate query processing time
        query_time = QUERY_PROCESSING_TIME
        
        # Calculate total response time
        total_time = query_time + sum(network_latency)
        
        # Calculate average response time
        avg_response_time = total_time / NUM_SERVERS
        
        avg_response_times.append(avg_response_time)
    
    return avg_response_times

def plot_latency_impact(mean_latency, std_deviations):
    num_samples = 1000
    for std_dev in std_deviations:
        avg_response_times = simulate_average_response_time(mean_latency, std_dev, num_samples)
        avg_response_time = np.mean(avg_response_times)
        plt.bar(std_dev, avg_response_time, align='center', alpha=0.5, label=f'Std Dev {std_dev}')
    
    plt.xlabel('Distribution of Network Delay (Std Dev)')
    plt.ylabel('Average Query Response Time (ms)')
    plt.title('Impact of Network Latency on Average Query Response Time')
    plt.legend()
    plt.grid(True)
    plt.show()

# Example usage
mean_latency = 5  # Mean latency in milliseconds
std_deviations = [1, 5, 10]  # Different standard deviations of latency

plot_latency_impact(mean_latency, std_deviations)
