/**
 * Network state manager with online/offline detection and heartbeat ping.
 */

class NetworkMonitor {
  constructor() {
    this.isOnline = typeof navigator !== "undefined" ? navigator.onLine : true;
    this.listeners = new Set();
    this.pingInterval = null;
    this.pingUrl = "/api/auth/check"; // Lightweight ping endpoint
    this.pingFrequency = 15000; // 15 seconds

    if (typeof window !== "undefined") {
      window.addEventListener("online", () => this.handleStatusChange(true));
      window.addEventListener("offline", () => this.handleStatusChange(false));
      this.startHeartbeat();
    }
  }

  handleStatusChange(status) {
    if (this.isOnline !== status) {
      this.isOnline = status;
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
   * Checks real connectivity with a lightweight fetch to server.
   * @returns {Promise<boolean>}
   */
  async checkConnection() {
    if (typeof window === "undefined" || !navigator.onLine) {
      this.handleStatusChange(false);
      return false;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);
      const res = await fetch(`${this.pingUrl}?_t=${Date.now()}`, {
        method: "GET",
        cache: "no-store",
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      const reachable = res.ok || res.status === 200 || res.status === 401 || res.status === 403;
      this.handleStatusChange(reachable);
      return reachable;
    } catch {
      // If fetch fails but browser has active internet connection, check navigator.onLine
      const fallback = typeof navigator !== "undefined" ? navigator.onLine : false;
      this.handleStatusChange(fallback);
      return fallback;
    }
  }


  startHeartbeat() {
    if (this.pingInterval) clearInterval(this.pingInterval);
    this.pingInterval = setInterval(() => {
      if (typeof document !== "undefined" && document.visibilityState === "visible") {
        this.checkConnection();
      }
    }, this.pingFrequency);
  }

  stopHeartbeat() {
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }
}

export const networkMonitor = new NetworkMonitor();
