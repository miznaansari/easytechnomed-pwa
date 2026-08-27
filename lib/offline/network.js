/**
 * Network state manager using native browser online/offline events (navigator.onLine).
 * Zero server polling dependency — eliminates unnecessary /api/auth/check network traffic.
 */

class NetworkMonitor {
  constructor() {
    this.isOnline = typeof navigator !== "undefined" ? Boolean(navigator.onLine) : true;
    this.listeners = new Set();

    if (typeof window !== "undefined") {
      window.addEventListener("online", () => this.handleStatusChange(true));
      window.addEventListener("offline", () => this.handleStatusChange(false));
    }
  }

  handleStatusChange(status) {
    const newStatus = Boolean(status);
    if (this.isOnline !== newStatus) {
      this.isOnline = newStatus;
      this.notifyListeners();
    }
  }

  notifyListeners() {
    this.listeners.forEach((callback) => {
      try {
        callback(this.isOnline);
      } catch (err) {
        console.error("[NetworkMonitor] Listener error:", err);
      }
    });
  }

  /**
   * Subscribe to network status changes.
   * @param {function(boolean): void} callback 
   * @returns {function(): void} Unsubscribe function
   */
  subscribe(callback) {
    this.listeners.add(callback);
    callback(this.isOnline);
    return () => {
      this.listeners.delete(callback);
    };
  }

  /**
   * Returns current online status directly from native navigator.onLine without API calls.
   * @returns {boolean}
   */
  checkConnection() {
    const status = typeof navigator !== "undefined" ? Boolean(navigator.onLine) : true;
    this.handleStatusChange(status);
    return status;
  }
}

export const networkMonitor = new NetworkMonitor();

