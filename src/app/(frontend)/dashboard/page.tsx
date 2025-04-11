"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  CreditCard,
  Home,
  LogOut,
  MapPin,
  Package,
  Settings,
  ShoppingBag,
  User,
  ChevronRight,
  Clock,
  Plus,
  Edit,
  Trash,
  Eye,
  EyeOff,
  Shield,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { useMobile } from "@/hooks/use-mobile"

// Mock user data
const user = {
  name: "Maria Johnson",
  email: "maria@example.com",
  lastLogin: "April 10, 2025 at 3:45 PM",
  lastLoginLocation: "New York, USA",
}

// Mock orders data
const orders = [
  {
    id: "BK-2025-04-01",
    date: "April 1, 2025",
    status: "Delivered",
    total: 189,
    items: [
      {
        id: 1,
        name: "Dune Knot",
        color: "Natural",
        size: "Medium",
        price: 189,
        image: "/placeholder.svg?height=600&width=600&text=Dune Knot",
      },
    ],
    tracking: "USPS123456789",
    deliveredDate: "April 8, 2025",
    shippingAddress: {
      name: "Maria Johnson",
      street: "123 Main Street, Apt 4B",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    paymentMethod: {
      type: "Visa",
      last4: "4242",
    },
  },
  {
    id: "BK-2025-03-15",
    date: "March 15, 2025",
    status: "Delivered",
    total: 219,
    items: [
      {
        id: 2,
        name: "Midnight Flow",
        color: "Bold",
        size: "Large",
        price: 219,
        image: "/placeholder.svg?height=600&width=600&text=Midnight Flow",
      },
    ],
    tracking: "USPS987654321",
    deliveredDate: "March 22, 2025",
    shippingAddress: {
      name: "Maria Johnson",
      street: "123 Main Street, Apt 4B",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    paymentMethod: {
      type: "Mastercard",
      last4: "5678",
    },
  },
]

// Mock addresses data
const addresses = [
  {
    id: 1,
    name: "Maria Johnson",
    street: "123 Main Street, Apt 4B",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "United States",
    isDefault: true,
    phone: "+1 (555) 123-4567",
  },
  {
    id: 2,
    name: "Maria Johnson",
    street: "456 Park Avenue",
    city: "Boston",
    state: "MA",
    zip: "02108",
    country: "United States",
    isDefault: false,
    phone: "+1 (555) 987-6543",
  },
]

// Mock payment methods data
const paymentMethods = [
  {
    id: 1,
    type: "Visa",
    last4: "4242",
    expiry: "05/27",
    isDefault: true,
  },
  {
    id: 2,
    type: "Mastercard",
    last4: "5678",
    expiry: "09/26",
    isDefault: false,
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("orders")
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<any>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const isMobile = useMobile()

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    })
    router.push("/")
  }

  const handleDeleteAccount = () => {
    toast({
      title: "Account deleted",
      description: "Your account has been successfully deleted.",
    })
    router.push("/")
  }

  const handleViewOrderDetails = (order: any) => {
    setSelectedOrder(order)
  }

  const handleCloseOrderDetails = () => {
    setSelectedOrder(null)
  }

  const handleSaveAddress = () => {
    toast({
      title: "Address saved",
      description: "Your address has been saved successfully.",
    })
  }

  const handleSavePaymentMethod = () => {
    toast({
      title: "Payment method saved",
      description: "Your payment method has been saved successfully.",
    })
  }

  const handleSaveAccountSettings = () => {
    toast({
      title: "Settings updated",
      description: "Your account settings have been updated successfully.",
    })
  }

  const renderSidebar = () => (
    <div className="w-64 bg-white rounded-lg border border-[#e9e2d9] overflow-hidden shadow-sm">
      <div className="p-6 border-b border-[#e9e2d9]">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#d4a89a]/20 flex items-center justify-center">
            <User className="h-5 w-5 text-[#d4a89a]" />
          </div>
          <div>
            <h2 className="font-medium text-[#3c3a38]">{user.name}</h2>
            <p className="text-sm text-[#3c3a38]/70">{user.email}</p>
          </div>
        </div>
      </div>
      <nav className="p-2">
        {[
          { id: "orders", label: "My Orders", icon: ShoppingBag },
          { id: "addresses", label: "Addresses", icon: MapPin },
          { id: "payment", label: "Payment Methods", icon: CreditCard },
          { id: "account", label: "Account Settings", icon: Settings },
        ].map((item) => (
          <button
            key={item.id}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-left transition-colors ${activeTab === item.id ? "bg-[#d4a89a]/10 text-[#d4a89a]" : "text-[#3c3a38] hover:bg-[#f9f6f2]"
              }`}
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.label}</span>
          </button>
        ))}
        <Separator className="my-2" />
        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-left text-[#3c3a38] hover:bg-[#f9f6f2] transition-colors"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          <span>Log Out</span>
        </button>
      </nav>
    </div>
  )

  const renderMobileTabs = () => (
    <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-4 mb-6">
        <TabsTrigger value="orders" className="flex flex-col items-center gap-1 py-2">
          <ShoppingBag className="h-4 w-4" />
          <span className="text-xs">Orders</span>
        </TabsTrigger>
        <TabsTrigger value="addresses" className="flex flex-col items-center gap-1 py-2">
          <MapPin className="h-4 w-4" />
          <span className="text-xs">Addresses</span>
        </TabsTrigger>
        <TabsTrigger value="payment" className="flex flex-col items-center gap-1 py-2">
          <CreditCard className="h-4 w-4" />
          <span className="text-xs">Payment</span>
        </TabsTrigger>
        <TabsTrigger value="account" className="flex flex-col items-center gap-1 py-2">
          <Settings className="h-4 w-4" />
          <span className="text-xs">Account</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )

  const renderOrdersSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl md:text-3xl text-[#3c3a38]">My Orders</h1>
        <Link href="/products">
          <Button variant="outline" className="border-[#d4a89a] text-[#d4a89a] hover:bg-[#d4a89a] hover:text-white">
            Continue Shopping
          </Button>
        </Link>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-[#e9e2d9]">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#f9f6f2] mb-4">
            <Package className="h-8 w-8 text-[#d4a89a]" />
          </div>
          <h3 className="font-serif text-xl text-[#3c3a38] mb-2">No orders yet</h3>
          <p className="text-[#3c3a38]/70 mb-6">Your first Brea purse awaits ✨</p>
          <Link href="/products">
            <Button className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">Browse Collection</Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-serif text-lg text-[#3c3a38]">Order {order.id}</CardTitle>
                    <CardDescription>Placed on {order.date}</CardDescription>
                  </div>
                  <Badge
                    className={
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : order.status === "Processing"
                          ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                          : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                    }
                  >
                    {order.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative h-20 w-20 rounded-md overflow-hidden">
                      <Image
                        src={order.items[0].image || "/placeholder.svg"}
                        alt={order.items[0].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[#3c3a38]">{order.items[0].name}</h3>
                    <p className="text-sm text-[#3c3a38]/70">
                      {order.items[0].color}, {order.items[0].size}
                    </p>
                    <p className="text-sm font-medium text-[#3c3a38] mt-1">${order.items[0].price}</p>
                    {order.items.length > 1 && (
                      <p className="text-sm text-[#3c3a38]/70 mt-1">+ {order.items.length - 1} more items</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-[#3c3a38]">Total: ${order.total}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-[#e9e2d9] pt-3 flex justify-between">
                <div className="flex items-center text-sm text-[#3c3a38]/70">
                  <Clock className="h-3 w-3 mr-1" />
                  {order.status === "Delivered"
                    ? `Delivered on ${order.deliveredDate}`
                    : "Estimated delivery in 3-5 days"}
                </div>
                <Button
                  variant="ghost"
                  className="text-[#d4a89a] hover:text-[#d4a89a] hover:bg-[#d4a89a]/10"
                  onClick={() => handleViewOrderDetails(order)}
                >
                  View Details
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Order Details Dialog */}
      {selectedOrder && (
        <Dialog open={!!selectedOrder} onOpenChange={handleCloseOrderDetails}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-[#3c3a38]">Order Details</DialogTitle>
              <DialogDescription>
                Order {selectedOrder.id} • {selectedOrder.date}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div className="bg-[#f9f6f2] p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    className={
                      selectedOrder.status === "Delivered"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : selectedOrder.status === "Processing"
                          ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                          : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                    }
                  >
                    {selectedOrder.status}
                  </Badge>
                  <span className="text-sm text-[#3c3a38]">
                    {selectedOrder.status === "Delivered"
                      ? `Delivered on ${selectedOrder.deliveredDate}`
                      : "Estimated delivery in 3-5 days"}
                  </span>
                </div>
                {selectedOrder.tracking && (
                  <div className="text-sm">
                    <span className="text-[#3c3a38]/70">Tracking: </span>
                    <a href="#" className="text-[#d4a89a] hover:underline">
                      {selectedOrder.tracking}
                    </a>
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-medium text-[#3c3a38] mb-3">Items</h3>
                <div className="space-y-4">
                  {selectedOrder.items.map((item: any) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#3c3a38]">{item.name}</h4>
                        <p className="text-sm text-[#3c3a38]/70">
                          {item.color}, {item.size}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-[#3c3a38]">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-[#3c3a38] mb-2">Shipping Address</h3>
                  <p className="text-sm text-[#3c3a38]">{selectedOrder.shippingAddress.name}</p>
                  <p className="text-sm text-[#3c3a38]">{selectedOrder.shippingAddress.street}</p>
                  <p className="text-sm text-[#3c3a38]">
                    {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state}{" "}
                    {selectedOrder.shippingAddress.zip}
                  </p>
                  <p className="text-sm text-[#3c3a38]">{selectedOrder.shippingAddress.country}</p>
                </div>
                <div>
                  <h3 className="font-medium text-[#3c3a38] mb-2">Payment Method</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-12 bg-[#f9f6f2] rounded flex items-center justify-center text-xs font-medium">
                      {selectedOrder.paymentMethod.type}
                    </div>
                    <span className="text-sm text-[#3c3a38]">ending in {selectedOrder.paymentMethod.last4}</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#3c3a38]">Subtotal</span>
                  <span className="text-[#3c3a38]">${selectedOrder.total - 5}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#3c3a38]">Shipping</span>
                  <span className="text-[#3c3a38]">$5.00</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-[#3c3a38]">Total</span>
                  <span className="text-[#3c3a38]">${selectedOrder.total}</span>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                className="border-[#d4a89a] text-[#d4a89a] hover:bg-[#d4a89a] hover:text-white"
                onClick={handleCloseOrderDetails}
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )

  const renderAddressesSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl md:text-3xl text-[#3c3a38]">My Addresses</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add New Address
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-[#3c3a38]">Add New Address</DialogTitle>
              <DialogDescription>Add a new shipping address to your account.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your full name" className="border-[#e9e2d9]" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="street">Street Address</Label>
                <Input id="street" placeholder="Street address" className="border-[#e9e2d9]" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="apartment" className="text-sm text-[#3c3a38]/70">
                  Apartment, suite, etc. (optional)
                </Label>
                <Input id="apartment" placeholder="Apartment, suite, etc." className="border-[#e9e2d9]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="City" className="border-[#e9e2d9]" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input id="state" placeholder="State" className="border-[#e9e2d9]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="zip">Postal Code</Label>
                  <Input id="zip" placeholder="Postal code" className="border-[#e9e2d9]" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="Country" className="border-[#e9e2d9]" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Phone number" className="border-[#e9e2d9]" />
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Switch id="default-address" />
                <Label htmlFor="default-address">Set as default address</Label>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" className="border-[#e9e2d9] text-[#3c3a38]" onClick={() => { }}>
                Cancel
              </Button>
              <Button className="bg-[#d4a89a] hover:bg-[#c89485] text-white" onClick={handleSaveAddress}>
                Save Address
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {addresses.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-[#e9e2d9]">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#f9f6f2] mb-4">
            <Home className="h-8 w-8 text-[#d4a89a]" />
          </div>
          <h3 className="font-serif text-xl text-[#3c3a38] mb-2">No addresses saved</h3>
          <p className="text-[#3c3a38]/70 mb-6">Add your first shipping address</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">Add Address</Button>
            </DialogTrigger>
            {/* Dialog content would be the same as above */}
          </Dialog>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {addresses.map((address) => (
            <Card key={address.id} className={address.isDefault ? "border-[#d4a89a]" : ""}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="font-medium text-[#3c3a38]">{address.name}</CardTitle>
                  {address.isDefault && <Badge className="bg-[#d4a89a] hover:bg-[#d4a89a]">Default</Badge>}
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-[#3c3a38]">{address.street}</p>
                <p className="text-[#3c3a38]">
                  {address.city}, {address.state} {address.zip}
                </p>
                <p className="text-[#3c3a38]">{address.country}</p>
                <p className="text-[#3c3a38] mt-2">{address.phone}</p>
              </CardContent>
              <CardFooter className="border-t border-[#e9e2d9] pt-3 flex justify-between">
                <Button variant="ghost" size="sm" className="text-[#3c3a38] hover:bg-[#f9f6f2]">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50 hover:text-red-500">
                  <Trash className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )

  const renderPaymentMethodsSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl md:text-3xl text-[#3c3a38]">Payment Methods</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Payment Method
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-[#3c3a38]">Add Payment Method</DialogTitle>
              <DialogDescription>Add a new credit or debit card to your account.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" className="border-[#e9e2d9]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="expiry">Expiration Date</Label>
                  <Input id="expiry" placeholder="MM / YY" className="border-[#e9e2d9]" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvc">Security Code</Label>
                  <Input id="cvc" placeholder="CVC" className="border-[#e9e2d9]" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name-on-card">Name on Card</Label>
                <Input id="name-on-card" placeholder="Name as it appears on card" className="border-[#e9e2d9]" />
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Switch id="default-payment" />
                <Label htmlFor="default-payment">Set as default payment method</Label>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" className="border-[#e9e2d9] text-[#3c3a38]" onClick={() => { }}>
                Cancel
              </Button>
              <Button className="bg-[#d4a89a] hover:bg-[#c89485] text-white" onClick={handleSavePaymentMethod}>
                Save Card
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {paymentMethods.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-[#e9e2d9]">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#f9f6f2] mb-4">
            <CreditCard className="h-8 w-8 text-[#d4a89a]" />
          </div>
          <h3 className="font-serif text-xl text-[#3c3a38] mb-2">No payment methods saved</h3>
          <p className="text-[#3c3a38]/70 mb-6">Add your first payment method</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">Add Payment Method</Button>
            </DialogTrigger>
            {/* Dialog content would be the same as above */}
          </Dialog>
        </div>
      ) : (
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <Card key={method.id} className={method.isDefault ? "border-[#d4a89a]" : ""}>
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-16 bg-[#f9f6f2] rounded flex items-center justify-center text-sm font-medium">
                      {method.type}
                    </div>
                    <div>
                      <p className="font-medium text-[#3c3a38]">•••• •••• •••• {method.last4}</p>
                      <p className="text-sm text-[#3c3a38]/70">Expires {method.expiry}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {method.isDefault && <Badge className="bg-[#d4a89a] hover:bg-[#d4a89a]">Default</Badge>}
                    <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50 hover:text-red-500">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <div className="p-4 bg-[#f9f6f2] rounded-lg border border-[#e9e2d9] flex items-center gap-2">
            <Shield className="h-4 w-4 text-[#d4a89a]" />
            <p className="text-sm text-[#3c3a38]">
              Your payment information is securely stored by our payment provider.
            </p>
          </div>
        </div>
      )}
    </div>
  )

  const renderAccountSettingsSection = () => (
    <div className="space-y-6">
      <h1 className="font-serif text-2xl md:text-3xl text-[#3c3a38]">Account Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle className="font-medium text-[#3c3a38]">Personal Information</CardTitle>
          <CardDescription>Update your account details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="account-email">Email Address</Label>
            <Input id="account-email" type="email" defaultValue={user.email} className="border-[#e9e2d9]" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="account-name">Full Name</Label>
            <Input id="account-name" defaultValue={user.name} className="border-[#e9e2d9]" />
          </div>
        </CardContent>
        <CardFooter className="border-t border-[#e9e2d9] pt-4 flex justify-end">
          <Button className="bg-[#d4a89a] hover:bg-[#c89485] text-white" onClick={handleSaveAccountSettings}>
            Save Changes
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-medium text-[#3c3a38]">Change Password</CardTitle>
          <CardDescription>Update your password to keep your account secure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="current-password">Current Password</Label>
            <div className="relative">
              <Input
                id="current-password"
                type={showPassword ? "text" : "password"}
                placeholder="Your current password"
                className="border-[#e9e2d9] pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#3c3a38]/50 hover:text-[#3c3a38]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-password">New Password</Label>
            <div className="relative">
              <Input
                id="new-password"
                type={showNewPassword ? "text" : "password"}
                placeholder="Your new password"
                className="border-[#e9e2d9] pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#3c3a38]/50 hover:text-[#3c3a38]"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your new password"
                className="border-[#e9e2d9] pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#3c3a38]/50 hover:text-[#3c3a38]"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-[#e9e2d9] pt-4 flex justify-end">
          <Button className="bg-[#d4a89a] hover:bg-[#c89485] text-white" onClick={handleSaveAccountSettings}>
            Update Password
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-medium text-[#3c3a38]">Security</CardTitle>
          <CardDescription>Manage your account security settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="two-factor">Two-Factor Authentication</Label>
              <Switch id="two-factor" />
            </div>
            <p className="text-sm text-[#3c3a38]/70">
              Add an extra layer of security to your account by requiring a verification code.
            </p>
          </div>
          <div className="pt-2">
            <h3 className="text-sm font-medium text-[#3c3a38] mb-2">Recent Activity</h3>
            <div className="bg-[#f9f6f2] p-3 rounded-md text-sm">
              <p className="text-[#3c3a38]">
                <span className="font-medium">Last login:</span> {user.lastLogin}
              </p>
              <p className="text-[#3c3a38]">
                <span className="font-medium">Location:</span> {user.lastLoginLocation}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-100">
        <CardHeader>
          <CardTitle className="font-medium text-red-600">Delete Account</CardTitle>
          <CardDescription>Permanently delete your account and all associated data</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-[#3c3a38]">
            This action cannot be undone. Once you delete your account, all your data will be permanently removed from
            our systems.
          </p>
        </CardContent>
        <CardFooter className="border-t border-[#e9e2d9] pt-4">
          <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete Account</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl text-[#3c3a38]">Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove all your data from
                  our servers.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-[#3c3a38] mb-4">Please type "delete" to confirm:</p>
                <Input className="border-[#e9e2d9]" placeholder="Type 'delete' to confirm" />
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  className="border-[#e9e2d9] text-[#3c3a38]"
                  onClick={() => setIsDeleteDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleDeleteAccount}>
                  Delete Account
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#f9f6f2]">
      <header className="container mx-auto px-4 py-6 border-b border-[#e9e2d9]">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif text-[#3c3a38] hover:opacity-90">
            Brea Knots
          </Link>
          <div className="hidden md:flex items-center space-x-6 text-[#3c3a38]">
            <Link href="/" className="text-sm hover:underline">
              Home
            </Link>
            <Link href="/products" className="text-sm hover:underline">
              Products
            </Link>
            <Link href="#about" className="text-sm hover:underline">
              About
            </Link>
            <Link href="#contact" className="text-sm hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-6">
          <h1 className="font-serif text-3xl text-[#3c3a38] mb-2">My Account</h1>
          <p className="text-[#3c3a38]/70">Manage your orders, addresses, and account settings</p>
        </div>

        {isMobile && renderMobileTabs()}

        <div className="flex flex-col md:flex-row gap-8">
          {!isMobile && <div className="md:w-1/4">{renderSidebar()}</div>}
          <div className="flex-1">
            {activeTab === "orders" && renderOrdersSection()}
            {activeTab === "addresses" && renderAddressesSection()}
            {activeTab === "payment" && renderPaymentMethodsSection()}
            {activeTab === "account" && renderAccountSettingsSection()}
          </div>
        </div>
      </div>

      <footer className="bg-[#3c3a38] text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4">Brea Knots</h3>
              <p className="text-sm text-white/80 mb-4">Handmade in Romania</p>
              <p className="text-sm text-white/80">Eco-conscious materials</p>
              <p className="italic text-sm mt-4">"Knots, not factories."</p>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-4">Navigate</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-sm text-white/80 hover:text-white">
                  Home
                </Link>
                <Link href="/products" className="block text-sm text-white/80 hover:text-white">
                  Products
                </Link>
                <Link href="/privacy-policy" className="block text-sm text-white/80 hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-sm text-white/80 hover:text-white">
                  Terms of Service
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-4">Contact</h3>
              <p className="text-sm text-white/80 mb-4">
                Have questions? We're here to help with any inquiries about our products or policies.
              </p>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="rounded-full border-white/20 text-white hover:bg-white/10 hover:border-white/30"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          <Separator className="my-8 bg-white/20" />

          <div className="text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} Brea Knots. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
