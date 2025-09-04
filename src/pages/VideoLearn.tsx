import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Trash2, Play, Loader2 } from "lucide-react"
import Nav from "@/components/Nav.tsx";
import AddVideoCard from "@/components/AddVideoCard.tsx";
import type {Video} from "@/constants.ts";



const VideoLearn = () => {
    // Extract YouTube IDs from URLs for initial videos
    const extractYouTubeId = (url: string): string | null => {
        const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
        const match = url.match(regex)
        return match ? match[1] : null
    }

    const [videos, setVideos] = useState<Video[]>([
        {
            id: "1",
            name: "Prototype like a Pro: Figma prototying tutorial with Full app example (Free Figma file included)",
            description: "Learn the basics of React components and JSX",
            youtubeId: extractYouTubeId("https://youtu.be/mqWAbK15kAc?si=QBQ5NkWF-x6oiE7W") || "mqWAbK15kAc",
        },
        {
            id: "2",
            name: "DON'T PLAY THIS VICTORIA ORENZE AND GUC WORSHIP UNLESS YOU ARE READY FOR A BREAKTHROUGH!!!",
            description: "ministerguc #victoriaorenze #propheticworship\n" +
                "Welcome to Pistis Hub \n",
            youtubeId: extractYouTubeId("https://www.youtube.com/watch?v=RQMDAk9njPc") || "RQMDAk9njPc",
        },
    ])

    const [currentVideo, setCurrentVideo] = useState<Video | null>(videos[0] || null)
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        youtubeUrl: "",
    })
    const [isVideoLoading, setIsVideoLoading] = useState(true)

    const handleAddVideo = (e: React.FormEvent) => {
        e.preventDefault()
        const youtubeId = extractYouTubeId(formData.youtubeUrl)

        if (!youtubeId) {
            alert("Please enter a valid YouTube URL")
            return
        }

        const newVideo: Video = {
            id: Date.now().toString(),
            name: formData.name,
            description: formData.description,
            youtubeId,
        }

        setVideos([...videos, newVideo])
        setFormData({ name: "", description: "", youtubeUrl: "" })

        if (!currentVideo) {
            setCurrentVideo(newVideo)
        }
    }

    const handleDeleteVideo = (id: string) => {
        const updatedVideos = videos.filter((video) => video.id !== id)
        setVideos(updatedVideos)

        if (currentVideo?.id === id) {
            setCurrentVideo(updatedVideos[0] || null)
        }
    }

    const handleWatchVideo = (video: Video) => {
        setIsVideoLoading(true)
        setCurrentVideo(video)
    }

    const handleVideoLoad = () => {
        setIsVideoLoading(false)
    }

    return (
        <div className="min-h-screen w-full" >

            <Nav/>

            <div className="text-center py-8">
                <h1 className="text-2xl md:text-4xl font-semibold text-[#120735] mb-2">Student Learning Hub</h1>
                <p className="text-gray-600 text-base md:text-lg">What are you watching today?</p>
            </div>

            <div className="container mx-auto px-6 pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3">
                        {/* Course Info Section */}
                        <div className="mb-6">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 capitalize">
                                {currentVideo ? currentVideo.name : "Select a video to watch"}
                            </h2>
                            {currentVideo && <p className="text-gray-600 text-sm md:text-base">{currentVideo.description}</p>}
                        </div>

                        {/* Video Player */}
                        <div className="mb-8">

                                {currentVideo ? (
                                    <div className="aspect-video w-full relative">
                                        {isVideoLoading && (
                                            <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center z-10">
                                                <div className="text-center">
                                                    <Loader2 className="h-12 w-12 text-gray-400 animate-spin mx-auto mb-4" />
                                                    <p className="text-gray-500 text-lg">Loading video...</p>
                                                </div>
                                            </div>
                                        )}
                                        <iframe
                                            src={`https://www.youtube.com/embed/${extractYouTubeId(currentVideo.youtubeId) || currentVideo.youtubeId}`}
                                            title={currentVideo.name}
                                            className="w-full h-full rounded-lg"
                                            aria-placeholder={currentVideo.description}
                                            allowFullScreen
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            onLoad={handleVideoLoad}
                                        />
                                    </div>
                                ) : (
                                    <div className="aspect-video w-full bg-gray-100 rounded-lg flex items-center justify-center">
                                        <div className="text-center">
                                            <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                            <p className="text-gray-500 text-lg">No video selected</p>
                                        </div>
                                    </div>
                                )}

                        </div>

                        {/* Add Video Form */}
                       <AddVideoCard formData={formData} handleAddVideo={handleAddVideo} setFormData={setFormData} />
                    </div>

                    <div className="lg:col-span-1">
                        <div className="rounded-lg p-6 h-[500px] md:h-screen overflow-y-scroll scrollbar-hide" style={{ backgroundColor: "#120735" }}>
                            <h3 className="text-white font-semibold text-lg mb-4">Video Library</h3>
                            <p className="text-gray-300 text-sm mb-6">
                                {videos.length} video{videos.length !== 1 ? "s" : ""} available
                            </p>

                            {videos.length === 0 ? (
                                <div className="text-center py-8">
                                    <p className="text-gray-400">No videos added yet. Add your first video to get started!</p>
                                </div>
                            ) : (
                                <div className="space-y-3 ">
                                    {videos.map((video) => (
                                        <div
                                            key={video.id}
                                            className={`p-4 rounded-lg transition-colors ${
                                                currentVideo?.id === video.id
                                                    ? "bg-white/10 border border-white/20"
                                                    : "bg-white/5 hover:bg-white/10 border border-transparent"
                                            }`}
                                        >
                                            <h4 className="font-semibold text-white mb-1 text-balance text-sm">{video.name}</h4>
                                            <p className="text-xs text-gray-300 mb-3 text-pretty">{video.description}</p>
                                            <div className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    onClick={() => handleWatchVideo(video)}
                                                    className="flex-1 text-xs"
                                                    variant={currentVideo?.id === video.id ? "default" : "outline"}
                                                    style={currentVideo?.id === video.id ? { backgroundColor: "#6420FF" } : {backgroundColor: "#ffffff"}}
                                                    disabled={currentVideo?.id === video.id}
                                                >
                                                    {isVideoLoading && currentVideo?.id === video.id ? <Loader2 className="h-3 w-3 animate-spin"/> : <Play className="h-3 w-3 mr-1" />}
                                                    Watch
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => handleDeleteVideo(video.id)}
                                                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10 border-red-400/30"
                                                >
                                                    <Trash2 className="h-3 w-3" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VideoLearn
